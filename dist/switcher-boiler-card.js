import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";
import "./switcher-boiler-card-editor.js";
  
class SwitcherBoilerCard extends LitElement {
  static properties = {
    hass: {},
    config: {},
    timerValue: { type: Number },
  };
  
  constructor() {
    super();
    this.hasError = false;
    this.timerValue = 15;
  }

  static getConfigElement() {
    return document.createElement("switcher-boiler-card-editor");
  }

  static getStubConfig() {
    return {
      type: "custom:switcher-boiler-card",
      name: "Boiler",
      entity: "",
      icon: "",
      time_left: "",
      sensor_1: "",
      sensor_2: "",
    };
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("You need to define an entity");
    }
    this.config = config;
  }

  render() {
    const { name, icon, entity } = this.config;

    const entityState = this.hass?.states?.[entity];
    if (!entityState) return;

    const friendlyName = entityState?.attributes?.friendly_name || "Unknown Entity";
    const displayName = name || friendlyName || "Boiler";
    const stateValue = entityState?.state || "Unavailable";

    const displayIcon = icon || entityState?.attributes?.icon || "mdi:waves";
    
    const isOn = stateValue === "on";
    const iconContainerClass = isOn ? "icon-container on" : "icon-container off";
    const iconClass = isOn ? "icon on" : "icon off";    

    let displayState = "";

    if (isOn) {
      if (this.config.time_left && !this.config.sensor_1 && !this.config.sensor_2) {
        displayState = this.hass.states[this.config.time_left].state;
      }
      if (this.config.time_left && !this.config.sensor_1 && this.config.sensor_2) {
        displayState = this.hass.states[this.config.time_left].state
          + " • " + this.hass.states[this.config.sensor_2].state + this.hass.states[this.config.sensor_2].attributes.unit_of_measurement;
      }
      if (this.config.time_left && this.config.sensor_1 && !this.config.sensor_2) {
        displayState = this.hass.states[this.config.time_left].state
          + " • " + this.hass.states[this.config.sensor_1].state + this.hass.states[this.config.sensor_1].attributes.unit_of_measurement;
      }      
      if (this.config.time_left && this.config.sensor_1 && this.config.sensor_2) {
        displayState = this.hass.states[this.config.time_left].state
          + " • " + this.hass.states[this.config.sensor_1].state + this.hass.states[this.config.sensor_1].attributes.unit_of_measurement
          + " • " + this.hass.states[this.config.sensor_2].state + this.hass.states[this.config.sensor_2].attributes.unit_of_measurement;
      }
      if (!this.config.time_left && this.config.sensor_1 && this.config.sensor_2) {
        displayState = this.hass.states[this.config.sensor_1].state + this.hass.states[this.config.sensor_1].attributes.unit_of_measurement
          + " • " + this.hass.states[this.config.sensor_2].state + this.hass.states[this.config.sensor_2].attributes.unit_of_measurement;
      }
      if (!this.config.time_left && !this.config.sensor_1 && this.config.sensor_2) {
        displayState = this.hass.states[this.config.sensor_2].state + this.hass.states[this.config.sensor_2].attributes.unit_of_measurement;
      }
      if (!this.config.time_left && this.config.sensor_1 && !this.config.sensor_2) {
        displayState = this.hass.states[this.config.sensor_1].state + this.hass.states[this.config.sensor_1].attributes.unit_of_measurement;
      }      
      if (!this.config.time_left && !this.config.sensor_1 && !this.config.sensor_2) {
        displayState = this.hass.localize(`component.switch.entity_component._.state.on`) || "on";
      }                      
    } else {
      if (this.config.sensor_2) {
        displayState = this.hass.localize(`component.switch.entity_component._.state.off`) || "off";
        displayState += " • " + this.hass.states[this.config.sensor_2].state;
        displayState += this.hass.states[this.config.sensor_2].attributes.unit_of_measurement;
      } else {
        displayState = this.hass.localize(`component.switch.entity_component._.state.off`) || "off";
      }
    }

    const powerButtonClass = isOn ? "button power on" : "button power off";

    const isDark = this.isDarkTheme();
    const buttonClass = isDark ? "button dark-theme" : "button light-theme";

    return html`
      <ha-card class="card" id="card">
        <div class="container">
          <div class="content" @click="${this._showMoreInfo}">
            <div class="${iconContainerClass}" id="icon-container">
              <ha-icon icon="${displayIcon}" class="${iconClass}" id="icon"></ha-icon>
            </div>
            <div class="label">
              <span class="primary" id="name">${displayName}</span>
              <span class="secondary" id="state">${displayState}</span>
            </div>
          </div>
          <div class="controls">
            <div class="buttons-group">
              <button class="${powerButtonClass}" @click="${this._toggleBoiler}">
                <ha-icon icon="mdi:power" class="button_icon power"></ha-icon>
              </button>
              <button class="${buttonClass} timer" @click=${this._turnOnBoilerWithTimer}>
                <ha-icon icon="mdi:timer-outline" class="button_icon timer"></ha-icon>
              </button>
              <button class="${buttonClass} timer_time" @click=${this._cycleTimerValue}>
                ${this.timerValue}
              </button>
            </div>
          </div>
        </div>      
      </ha-card>
    `;
  }
  
  static styles = css`

    ha-card {
      display: flex;
      align-items: center;
      flex-direction: column;
      cursor: pointer;
      transition: background-color 0.2s ease;
      height: 100%;
    }

    .container {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%
    }   

    .content {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 9px;
        flex: 1;
        box-sizing: border-box;
        //pointer-events: none;
    }    

    .controls {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 11px;
        padding-top: 0px;
        gap: 12px;
        width: 100%;
        //height: 100%;
        box-sizing: border-box;
        //justify-content: space-evenly;
    }

    .buttons-group {
      display: inline-flex;
      justify-content: space-between;
      width: 100%;
      gap: 12px;
    }

    .button {
      height: var(--feature-height, 42px);
      cursor: pointer;
      transition: background-color 180ms ease-in-out;
      text-align: center;
      flex: 1;
      -webkit-flex: 1;
      border: none;
      border-radius: var(--control-button-border-radius, 10px);
      //pointer-events: none;
      color: var(--primary-text-color);
      font-weight: 500;
      font-size: 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
    }

    .button .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-animation 1000ms ease-out;
        background-color: currentColor; /* Matches the text color or icon color */
        opacity: 0.08;
        pointer-events: none; /* Prevent interference with button click events */
    }

    @keyframes ripple-animation {
        to {
            transform: scale(30); /* Scale the ripple */
            opacity: 0; /* Fade out */
        }
    }  

    .button.power.off {
      background-color: var(--grey-color);
    }

    .button.power.on {
      background-color: #F54436;
    }    

    .combined-buttons {
      display: inline-flex;
      flex: 2;
      -webkit-flex: 2;
      gap: 0px;
      border-radius: var(--feature-border-radius, 12px);
      //overflow: hidden;
    }

    .button.dark-theme {
      background-color: rgba(70,70,70,0.2);
    }

    .button.light-theme {
      background-color: rgba(189,189,189,0.2);
    } 
      
    .button.dark-theme:hover {
      background-color: rgba(70,70,70,0.3);
    }

    .button.light-theme:hover {
      background-color: rgba(189,189,189,0.3);
    }     

    .combined-buttons .button {
      flex: 1;
      -webkit-flex: 1;
      border-radius: 0;
      background: none;
      display: inline-flex;
      overflow: hidden;
    }

    .combined-buttons .button:first-child {
      border-radius: var(--feature-border-radius, 12px) 0 0 var(--feature-border-radius, 12px);
    }

    .combined-buttons .button:last-child {
      border-radius: 0 var(--feature-border-radius, 12px) var(--feature-border-radius, 12px) 0;
    }

    .button_icon {
      --mdc-icon-size: 20px;
      font-size: 12px;
    }

    .button_icon.power {
      color: rgb(255,255,255);
    } 
    
    .icon-container {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      position: relative;
      flex: none;
      margin-right: 10px;
      margin-inline-start: initial;
      margin-inline-end: 10px;
      direction: var(--direction);
      transition: transform 180ms ease-in-out;     
    }
    
    .icon-container.on {
      background-color: rgba(245, 68, 54, 0.2); /* Light red for "on" state */
    }

    .icon-container.off {
      background-color: rgba(158, 158, 158, 0.2); /* Light gray for "off" state */
    }
    
    .icon {
      font-size: 22px;
      transition: color 0.3s;
      --mdc-icon-size: 22px;
    }

    .icon.on {
      color: #F54436; /* Red for "on" state */
    }

    .icon.off {
      color: var(--state-light-off-color, var(--state-light-inactive-color, var(--state-inactive-color)));
    }
    
    .label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 12px;
      font-size: 14px;
      color: #000;
    }

    .primary {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: .1px;
      color: var(--primary-text-color);
    } 

    .secondary {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: .4px;
      color: var(--primary-text-color);
    }

    span {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
    }



  `;

  _toggleBoiler(event) {
    event.stopPropagation();
    event.preventDefault();
    const entityId = this.config.entity;
    this.hass.callService("homeassistant", "toggle", { entity_id: entityId });

    this._rippleEffect(event);
  }

  _turnOnBoilerWithTimer(event) {
    event.stopPropagation();
    event.preventDefault();
    const entityId = this.config.entity;
    this.hass.callService("switcher_kis", "turn_on_with_timer", { entity_id: entityId, timer_minutes: this.timerValue });

    this._rippleEffect(event);
  }

  _cycleTimerValue(event) {
    event.stopPropagation();
    event.preventDefault(); 
    const timerValues = [15, 30, 45, 60];
    const currentIndex = timerValues.indexOf(this.timerValue);
    this.timerValue = timerValues[(currentIndex + 1) % timerValues.length];

    this._rippleEffect(event);
  }

  _rippleEffect(event) {
    const button = event.currentTarget;

    // Create ripple element
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    // Get click position
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    // Style ripple element
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Append ripple and remove after animation
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600); // Matches animation duration 
  }

  _showMoreInfo(event) {
    event.stopPropagation();
    event.preventDefault(); 
    const entityId = this.config.entity;
    if (!entityId) return;
  
    const moreInfoevent = new Event("hass-more-info", {
      bubbles: true,
      cancelable: true,
      composed: true,
    });
  
    moreInfoevent.detail = { entityId };
    this.dispatchEvent(moreInfoevent);
  }
  
  isDarkTheme() {
    return this.hass.themes.darkMode;
  }

  getCardSize() {
    return 3;
  }

  getLayoutOptions() {
    return {
      grid_rows: 1,
      grid_columns: 6,
      grid_min_rows: 1,
      grid_max_rows: 2,
    };
  }  
}

const cardDef = {
  type: "switcher-boiler-card",
  name: "Switcher Boiler Card",
  description: "Custom Switcher Boiler Switch card for Home Assistant",
  preview: true,
  documentationURL: "https://github.com/dmatik/switcher-boiler-card",
  configurable: true,
};
window.customCards = window.customCards || [];
window.customCards.push(cardDef);

customElements.define("switcher-boiler-card", SwitcherBoilerCard);