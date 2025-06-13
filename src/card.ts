import { html, LitElement, TemplateResult } from "lit";
import { property, state } from "lit/decorators.js";
import styles from "./card.styles";
import { HomeAssistant, LovelaceCardConfig } from "custom-card-helpers";

export class SwitcherBoilerCard extends LitElement {
  @state() timerValue: string;

  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) config!: LovelaceCardConfig;

  static styles = styles;

  constructor() {
    super();
    this.timerValue = "15";
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
      color_thresholds: false,
      cold_threshold: 20,
      hot_threshold: 50,
      temp_resolution: 1,
    };
  }

  setConfig(config: LovelaceCardConfig) {
    if (!config.entity) {
      throw new Error("You need to define an entity");
    }
    this.config = config;
    this.timerValue = this.config.timer_values
      ? this.config.timer_values[0]
      : "15";

    const coldThreshold: number = this.config.cold_threshold;
    const hotThreshold: number = this.config.hot_threshold;
    if (hotThreshold <= coldThreshold) {
      throw new Error("Cold Threshold must be lower then Hot Threshold");
    }

    // Validate temp_resolution
    let tempResolution = this.config.temp_resolution;
    if (
      tempResolution != undefined &&
      tempResolution != null &&
      tempResolution != ""
    ) {
      tempResolution = Number(tempResolution);
      if (isNaN(tempResolution) || ![0, 1, 2].includes(tempResolution)) {
        throw new Error(
          "Temperature Resolution must be a number and only 0, 1, or 2"
        );
      }
    }
  }

  render() {
    const { name, icon, entity } = this.config;

    const useColorThresholds: boolean = this.config.color_thresholds === true;
    const coldThreshold: number = this.config.cold_threshold || 20;
    const hotThreshold: number = this.config.hot_threshold || 50;

    const tempResolution: number = this.config.temp_resolution ?? 1;

    const entityState = this.hass?.states?.[entity];
    if (!entityState) return;

    const friendlyName =
      entityState?.attributes?.friendly_name || "Unknown Entity";
    const displayName = name || friendlyName || "Boiler";
    const stateValue = entityState?.state || "Unavailable";

    const displayIcon = icon || entityState?.attributes?.icon || "mdi:waves";

    const isOn = stateValue === "on";
    const iconSensorValue = parseFloat(
      this.hass.states[this.config.icon_sensor]?.state
    );
    const isIconSensor =
      this.config.icon_sensor &&
      this.hass.states[this.config.icon_sensor] &&
      !isNaN(iconSensorValue);

    let iconContainerClass: string = "icon-container";
    let iconSensorClass: string = "icon-sensor";

    if (useColorThresholds && isIconSensor) {
      if (iconSensorValue <= coldThreshold) {
        iconContainerClass += " cold";
        iconSensorClass += " cold";
      } else if (
        iconSensorValue > coldThreshold &&
        iconSensorValue <= hotThreshold
      ) {
        iconContainerClass += " warm";
        iconSensorClass += " warm";
      } else {
        iconContainerClass += " hot";
        iconSensorClass += " hot";
      }
    } else {
      if (isOn) {
        iconContainerClass += " on";
        iconSensorClass += " on";
      } else {
        iconContainerClass += " off";
        iconSensorClass += " off";
      }
    }

    if (tempResolution === 0) {
      iconSensorClass += " resolution-0";
    } else if (tempResolution === 2) {
      iconSensorClass += " resolution-2";
    } else {
      iconSensorClass += " resolution-1";
    }

    const iconClass = isOn ? "icon on" : "icon off";

    let displayState = "";

    if (isOn) {
      if (
        this.config.time_left &&
        !this.config.sensor_1 &&
        !this.config.sensor_2
      ) {
        displayState = this.hass.states[this.config.time_left].state;
      }
      if (
        this.config.time_left &&
        !this.config.sensor_1 &&
        this.config.sensor_2
      ) {
        displayState =
          this.hass.states[this.config.time_left].state +
          " • " +
          this.hass.states[this.config.sensor_2].state +
          this.hass.states[this.config.sensor_2].attributes.unit_of_measurement;
      }
      if (
        this.config.time_left &&
        this.config.sensor_1 &&
        !this.config.sensor_2
      ) {
        displayState =
          this.hass.states[this.config.time_left].state +
          " • " +
          this.hass.states[this.config.sensor_1].state +
          this.hass.states[this.config.sensor_1].attributes.unit_of_measurement;
      }
      if (
        this.config.time_left &&
        this.config.sensor_1 &&
        this.config.sensor_2
      ) {
        displayState =
          this.hass.states[this.config.time_left].state +
          " • " +
          this.hass.states[this.config.sensor_1].state +
          this.hass.states[this.config.sensor_1].attributes
            .unit_of_measurement +
          " • " +
          this.hass.states[this.config.sensor_2].state +
          this.hass.states[this.config.sensor_2].attributes.unit_of_measurement;
      }
      if (
        !this.config.time_left &&
        this.config.sensor_1 &&
        this.config.sensor_2
      ) {
        displayState =
          this.hass.states[this.config.sensor_1].state +
          this.hass.states[this.config.sensor_1].attributes
            .unit_of_measurement +
          " • " +
          this.hass.states[this.config.sensor_2].state +
          this.hass.states[this.config.sensor_2].attributes.unit_of_measurement;
      }
      if (
        !this.config.time_left &&
        !this.config.sensor_1 &&
        this.config.sensor_2
      ) {
        displayState =
          this.hass.states[this.config.sensor_2].state +
          this.hass.states[this.config.sensor_2].attributes.unit_of_measurement;
      }
      if (
        !this.config.time_left &&
        this.config.sensor_1 &&
        !this.config.sensor_2
      ) {
        displayState =
          this.hass.states[this.config.sensor_1].state +
          this.hass.states[this.config.sensor_1].attributes.unit_of_measurement;
      }
      if (
        !this.config.time_left &&
        !this.config.sensor_1 &&
        !this.config.sensor_2
      ) {
        displayState =
          this.hass.localize(`component.switch.entity_component._.state.on`) ||
          "on";
      }
    } else {
      if (this.config.sensor_2) {
        displayState =
          this.hass.localize(`component.switch.entity_component._.state.off`) ||
          "off";
        displayState += " • " + this.hass.states[this.config.sensor_2].state;
        displayState +=
          this.hass.states[this.config.sensor_2].attributes.unit_of_measurement;
      } else {
        displayState =
          this.hass.localize(`component.switch.entity_component._.state.off`) ||
          "off";
      }
    }

    const powerButtonClass = isOn ? "button power on" : "button power off";

    const isDark = this.isDarkTheme();
    const buttonClass = isDark ? "button dark-theme" : "button light-theme";

    return html`
      <ha-card class="card" id="card">
        <div class="container">
          <div
            class="content"
            @click="${(e: MouseEvent) =>
              this._showMoreInfo(e, this.config.entity)}"
          >
            <div class="${iconContainerClass}" id="icon-container">
              ${isIconSensor
                ? this.renderIconSensor(
                    iconSensorClass,
                    iconSensorValue,
                    tempResolution
                  )
                : this.renderIcon(iconClass, displayIcon)}
            </div>
            <div class="label">
              <span class="primary" id="name">${displayName}</span>
              <span class="secondary" id="state">${displayState}</span>
            </div>
          </div>
          <div class="controls">
            <div class="buttons-group">
              <button
                class="${powerButtonClass}"
                @click="${this._toggleBoiler}"
              >
                <ha-icon icon="mdi:power" class="button_icon power"></ha-icon>
              </button>
              <button
                class="${buttonClass} timer"
                @click=${this._turnOnBoilerWithTimer}
              >
                <ha-icon
                  icon="mdi:timer-outline"
                  class="button_icon timer"
                ></ha-icon>
              </button>
              <button
                class="${buttonClass} timer_time"
                @click=${this._cycleTimerValue}
              >
                ${this.timerValue}
              </button>
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }

  private renderIconSensor(
    iconSensorClass: string,
    iconSensorValue: number,
    tempResolution: number
  ): TemplateResult {
    let displayValue: string;
    if (tempResolution === 0) {
      displayValue = Math.round(iconSensorValue).toString();
    } else {
      displayValue = iconSensorValue.toFixed(tempResolution);
    }

    return html`
      <span
        class="${iconSensorClass}"
        @click="${(e: MouseEvent) =>
          this._showMoreInfo(e, this.config.icon_sensor)}"
      >
        ${displayValue}°
      </span>
    `;
  }

  private renderIcon(iconClass: string, displayIcon: string): TemplateResult {
    return html`
      <ha-icon icon="${displayIcon}" class="${iconClass}" id="icon"></ha-icon>
    `;
  }

  private _toggleBoiler(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();

    const entityId: string = this.config.entity;
    this.hass.callService("homeassistant", "toggle", { entity_id: entityId });

    this._rippleEffect(event);
  }

  private _turnOnBoilerWithTimer(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();

    const entityId = this.config.entity;
    this.hass.callService("switcher_kis", "turn_on_with_timer", {
      entity_id: entityId,
      timer_minutes: this.timerValue,
    });

    this._rippleEffect(event);
  }

  private _cycleTimerValue(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();

    // Create a unique, sorted array, filter values, and convert back to strings
    const timerValues: string[] = [
      ...new Set(
        (
          (this.config.timer_values as string[] | number[]) || [
            "15",
            "30",
            "45",
            "60",
          ]
        )
          .map(Number) // Convert all values to numbers
          .filter((value) => value >= 1 && value <= 150) // Keep only values in the range of 1 and 150
          .sort((a, b) => a - b) // Sort numerically
          .map(String) // Convert back to strings
      ),
    ];
    const currentIndex = timerValues.indexOf(this.timerValue);

    // Fallback to the first value if currentValue is not in the array
    this.timerValue =
      currentIndex === -1
        ? timerValues[0]
        : timerValues[(currentIndex + 1) % timerValues.length];

    this._rippleEffect(event);
  }

  private _rippleEffect(event: MouseEvent): void {
    const button = event.currentTarget as HTMLElement | null;
    if (!button) return;

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

  private _showMoreInfo(event: Event, entityId: string): void {
    event.stopPropagation();
    event.preventDefault();

    if (!entityId) return;

    const moreInfoEvent = new CustomEvent("hass-more-info", {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: { entityId },
    });

    this.dispatchEvent(moreInfoEvent);
  }

  private isDarkTheme(): boolean {
    return (this.hass.themes as any).darkMode ?? false;
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
      grid_max_columns: 4,
    };
  }
}
