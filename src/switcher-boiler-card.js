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
  };
  
  constructor() {
    super();
    this.hasError = false;
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
      electrical_current: "",
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
      if (this.config.time_left && !this.config.electrical_current) {
        displayState = this.hass.states[this.config.time_left].state;
      }
      if (this.config.electrical_current && !this.config.time_left) {
        displayState = this.hass.states[this.config.electrical_current].state + "A";
      }      
      if (this.config.time_left && this.config.electrical_current) {
        displayState = this.hass.states[this.config.time_left].state + " • " + this.hass.states[this.config.electrical_current].state + "A";
      }
      if (!this.config.time_left && !this.config.electrical_current) {
        displayState = this.hass.localize(`component.switch.entity_component._.state.on`) || "on";
      }                      
    } else {
      displayState = this.hass.localize(`component.switch.entity_component._.state.off`) || "off";
    }

    return html`
      <ha-card class="card" id="card" @click="${this._showMoreInfo}">
        <div class="container">
          <div class="content">
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
              <button class="button" @click=${this._showMoreInfo}>D</button>
              <button class="button" @click=${this._showMoreInfo}>D</button>
              <button class="button" @click=${this._showMoreInfo}>D</button>
            <div>
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

    // .content {
    //   display: flex;
    //   align-items: center;
    //   justify-content: flex-start;
    //   padding: 10px;
    // }

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
        pointer-events: none;
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
      display: grid; /* Use a grid layout */
      grid-template-columns: repeat(3, 1fr); /* Ensure 3 buttons take equal space */
      row-gap: 0px;
      column-gap: 12px;
      width: 100%; /* Make the group take up the full container width */
    }

    .button {
      height: var(--feature-height, 42px);
      border-radius: var(--feature-border-radius, 12px);
      border: none;
      background-color: #eeeeee;
      cursor: pointer;
      transition: background-color 180ms ease-in-out;
      text-align: center; /* Center button content */
    }

    // .card {
    //   display: flex;
    //   align-items: center;
    //   justify-content: flex-start;
    //   padding: 9px;
    //   background-color: var(--ha-card-background,var(--card-background-color,#fff));
    //   border-radius: var(--ha-card-border-radius,12px);
    //   box-shadow: var(--ha-card-box-shadow);
    //   cursor: pointer;
    //   user-select: none;
    //   transition: transform 0.2s;
    //   border-width: var(--ha-card-border-width,1px);
    //   border-style: solid;
    //   border-color: var(--ha-card-border-color,var(--divider-color,#e0e0e0));   
    // }
    
    .icon-container {
      display: flex;
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
    .button {
      display: block;
      height: var(--feature-height, 42px);
      width: 100%;
      border-radius: var(--feature-border-radius, 12px);
      border: none;
      background-color: #eeeeee;
      cursor: pointer;
      transition: background-color 180ms ease-in-out;
    }
    .button:hover {
      background-color: #dddddd;
    }
    .button:focus {
      background-color: #cdcdcd;
    }
  `;

  _toggleBoiler() {
    // Toggle the boiler entity
    const entityId = this.config.entity;
    this.hass.callService("homeassistant", "toggle", { entity_id: entityId });
  }

  _showMoreInfo() {
    const entityId = this.config.entity;
    if (!entityId) return;
  
    const event = new Event("hass-more-info", {
      bubbles: true,
      cancelable: true,
      composed: true,
    });
  
    event.detail = { entityId };
    this.dispatchEvent(event);
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