import { html, LitElement } from 'lit'
import styles from './editor.styles';

const SCHEMA = [
  { name: "entity", selector: { entity: { domain: ["switch"] } } },
  { name: "name", selector: { text: {} } },
  { name: "icon", selector: { icon: {} }, context: { icon_entity: "entity" } },
  { name: "time_left", selector: { entity: { domain: ["sensor"] } } },
  { name: "sensor_1", selector: { entity: { domain: ["sensor"] } } },
  { name: "sensor_2", selector: { entity: { domain: ["sensor"] } } },
  { name: "icon_sensor", selector: { entity: { domain: ["sensor"] } } },
  {
    name: "timer_values",
    selector: {

    },
  }
];

const fireEvent = (node, type, detail, options) => {
  options = options || {};
  const event = new Event(type, {
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed,
  });
  event.detail = detail;
  node.dispatchEvent(event);
  return event;
};

export class SwitcherBoilerCardEditor extends LitElement {

  static styles = styles;

  static properties = {
    hass: {},
    _config: {},
  };

  setConfig(config) {
    this._config = {
      ...config,
      timer_values: [...new Set((config.timer_values || ['15', '30', '45', '60'])
        .map(Number) // Convert all values to numbers
        .filter((value) => value >= 1 && value <= 150) // Keep only values in the range of 1 and 150
        .sort((a, b) => a - b) // Sort numerically
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

  _onTimerValueChanged(e) {
    const value = e.target.value;
    const checked = e.target.checked;
    const currentValues = this._config.timer_values || [];
    const updatedValues = checked
      ? [...currentValues, value]
      : currentValues.filter((v) => v !== value);

    const sortedValues = updatedValues.sort((a, b) => parseInt(a) - parseInt(b));

    this._valueChanged({
      detail: { value: { ...this._config, timer_values: sortedValues } },
    });
  }

  _valueChanged = (ev) =>
    fireEvent(this, "config-changed", { config: ev.detail.value });

  _computeLabelCallback = (schema) => {
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
      default:
        return `${this.hass.localize(
          `ui.panel.lovelace.editor.card.generic.${name}`
        )} (${this.hass.localize(
          "ui.panel.lovelace.editor.card.config.optional"
        )})`;
    }
  };
}
