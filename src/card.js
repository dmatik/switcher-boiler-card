import { html, LitElement } from 'lit'
import styles from './card.styles';

console.groupCollapsed(`%c SWITCHER-BOILER-CARD %c v${'1.1.4'}`, "color: white; background: #F54436; font-weight: bold", "color: #F54436; font-weight: bold"),
console.log("Readme:", "https://github.com/dmatik/switcher-boiler-card"),
console.groupEnd();

export class SwitcherBoilerCard extends LitElement {

  static styles = styles;

  static properties = {
    hass: {},
    config: {},
    timerValue: { type: String },
  };

  constructor() {
    super();
    this.hasError = false;
    this.timerValue = '15';
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
      icon_sensor: "",
    };
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("You need to define an entity");
    }
    this.config = config;
    this.timerValue = this.config.timer_values? this.config.timer_values[0] : '15';
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
    const iconSensorClass = isOn ? "icon-sensor on" : "icon-sensor off";

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
          <div class="content" @click="${(e) => this._showMoreInfo(e, this.config.entity)}">
            <div class="${iconContainerClass}" id="icon-container">
              ${
                this.config.icon_sensor && this.hass.states[this.config.icon_sensor] &&
                !isNaN(parseFloat(this.hass.states[this.config.icon_sensor].state))
                  ? html`<span class="${iconSensorClass}" @click="${(e) => this._showMoreInfo(e, this.config.icon_sensor)}">
                            ${parseFloat(this.hass.states[this.config.icon_sensor].state).toFixed(1)}°
                          </span>`
                  : html`<ha-icon icon="${displayIcon}" class="${iconClass}" id="icon"></ha-icon>`
              }
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

    // Create a unique, sorted array, filter values, and convert back to strings
    const timerValues = [...new Set((this.config.timer_values || ['15', '30', '45', '60'])
      .map(Number) // Convert all values to numbers
      .filter((value) => value >= 1 && value <= 150) // Keep only values in the range of 1 and 150
      .sort((a, b) => a - b) // Sort numerically
      .map(String) // Convert back to strings
      )];
    const currentIndex = timerValues.indexOf(this.timerValue);

    // Fallback to the first value if currentValue is not in the array
    this.timerValue =
      currentIndex === -1
        ? timerValues[0]
        : timerValues[(currentIndex + 1) % timerValues.length];

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
    setTimeout(() => ripple.remove(), 1000); // Matches animation duration
  }

  _showMoreInfo(event, entityId) {
    event.stopPropagation();
    event.preventDefault();
    //const entityId = this.config.entity;
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
      grid_rows: 2,
      grid_columns: 2,
      grid_min_rows: 2,
      grid_max_rows: 2,
      grid_min_columns: 2,
      grid_max_columns: 4
    };
  }
}