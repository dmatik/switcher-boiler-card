import { html, LitElement } from 'lit';
import { state } from "lit/decorators.js";
import styles from './editor.styles';
import { HomeAssistant, LovelaceCardConfig } from "custom-card-helpers";


const SCHEMA = [
  { name: "entity", selector: { entity: { domain: ["switch"] } } },
  { name: "name", selector: { text: {} } },
  { name: "icon", selector: { icon: {} }, context: { icon_entity: "entity" } },
  { name: "time_left", selector: { entity: { domain: ["sensor"] } } },
  { name: "sensor_1", selector: { entity: { domain: ["sensor"] } } },
  { name: "sensor_2", selector: { entity: { domain: ["sensor"] } } },
  {
    type: "grid",
    name: "",
    schema: [
      { name: "icon_sensor", selector: { entity: { domain: ["sensor"] } } },
      { name: "color_thresholds", selector: { boolean: {} } },
    ],
  },
  {
    type: "grid",
    name: "",
    schema: [
      { name: "cold_threshold", selector: { number: { min: 10, max: 80, step: 1, mode: "slider" } } },
      { name: "hot_threshold", selector: { number: { min: 10, max: 80, step: 1, mode: "slider" } } },
    ],
  },
  { name: "temp_resolution", selector: { number: { min: 0, max: 2, step: 1, mode: "box" } } },
  {
    name: "timer_values",
    selector: {

    },
  }
];

const fireEvent = (node: HTMLElement, type: string, detail: any, options: { bubbles?: boolean; cancelable?: boolean; composed?: boolean } = {}): CustomEvent => {
  const event = new CustomEvent(type, {
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed,
    detail: detail,
  });

  node.dispatchEvent(event);
  return event;
};

export class SwitcherBoilerCardEditor extends LitElement {

  @state() _config: LovelaceCardConfig = {} as LovelaceCardConfig;

  private hass!: HomeAssistant;

  static styles = styles;

  setConfig(config: LovelaceCardConfig) {
    this._config = {
      ...config,
      timer_values: [...new Set((config.timer_values || ['15', '30', '45', '60'])
        .map(Number) // Convert all values to numbers
        .filter((value: number) => value >= 1 && value <= 150) // Keep only values in the range of 1 and 150
        .sort((a: number, b: number) => a - b) // Sort numerically
        .map(String) // Convert back to strings
        )],
    };
  }

  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA.filter((field) => field.name !== "timer_values")}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      ${this._renderTimerValues()}
    `;
  }

  _renderTimerValues() {
    const timerValues = [
      { value: "15", label: "15" },
      { value: "30", label: "30" },
      { value: "45", label: "45" },
      { value: "60", label: "60" },
      { value: "75", label: "75" },
      { value: "90", label: "90" },
      { value: "105", label: "105" },
      { value: "120", label: "120" },
      { value: "135", label: "135" },
      { value: "150", label: "150" },
    ];

    const selectedValues = this._config.timer_values || [];

    return html`
      <div class="timer-values-label">Timer Values (Minutes) (Optional)</div>
      <div class="timer-values">
        ${timerValues.map(
          (option) => html`
            <label>
              <input
                type="checkbox"
                value="${option.value}"
                ?checked=${selectedValues.includes(option.value)}
                @change=${this._onTimerValueChanged}
              />
              ${option.label}
            </label>
          `
        )}
      </div>
    `;
  }

  _onTimerValueChanged(e: Event) {
    const target = e.target as HTMLInputElement | null;
    const value = target?.value;
    const checked = target?.checked ?? false;
    const currentValues: string[] = this._config.timer_values || [];
    const updatedValues = checked
      ? [...currentValues, value]
      : currentValues.filter((v) => v !== value);

    const sortedValues = updatedValues
      .filter((v): v is string => v !== undefined) // Filter out undefined values
      .sort((a, b) => parseInt(a) - parseInt(b));

    this._valueChanged(new CustomEvent("value-changed", {
      detail: { value: { ...this._config, timer_values: sortedValues } },
    }));
  }

  _valueChanged = (ev: CustomEvent) =>
    fireEvent(this, "config-changed", { config: ev.detail.value });

  _computeLabelCallback = (schema: { name: string }) => {
    const { name } = schema;
    switch (name) {
      case "time_left":
        return "Time Left Sensor (Optional)";
      case "sensor_1":
        return "Sensor 1 - On state (Optional)";
      case "sensor_2":
        return "Sensor 2 - On and Off state (Optional)";
      case "icon_sensor":
        return "Icon Sensor (Optional)";
      case "color_thresholds":
        return "Color Thresholds (Optional)";
      case "cold_threshold":
        return "Cold Threshold";
      case "hot_threshold":
        return "Hot Threshold";
      case "temp_resolution":
        return "Temperature Resolution (Optional)";         
      default:
        return `${this.hass.localize(
          `ui.panel.lovelace.editor.card.generic.${name}`
        )} (${this.hass.localize(
          "ui.panel.lovelace.editor.card.config.optional"
        )})`;
    }
  };
}
