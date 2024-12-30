
import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

const SCHEMA = [
  { name: "entity", selector: { entity: { domain: ["switch"] } } },
  { name: "name", selector: { text: {} } },
  { name: "icon", selector: { icon: {} }, context: { icon_entity: "entity" } },  
  { name: "time_left", selector: { entity: { domain: ["sensor"] } } },
  { name: "sensor_1", selector: { entity: { domain: ["sensor"] } } },
  { name: "sensor_2", selector: { entity: { domain: ["sensor"] } } },
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

class SwitcherBoilerCardEditor extends LitElement {
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
      default:
        return `${this.hass.localize(
          `ui.panel.lovelace.editor.card.generic.${name}`
        )} (${this.hass.localize(
          "ui.panel.lovelace.editor.card.config.optional"
        )})`;
    }
  };

  static styles = css`
    .card-config {
      /* Cancels overlapping Margins for HAForm + Card Config options */
      overflow: auto;
    }
    ha-switch {
      padding: 16px 6px;
    }
    .side-by-side {
      display: flex;
      align-items: flex-end;
    }
    .side-by-side > * {
      flex: 1;
      padding-right: 8px;
    }
    .side-by-side > *:last-child {
      flex: 1;
      padding-right: 0;
    }
    .suffix {
      margin: 0 8px;
    }
    hui-action-editor,
    ha-select,
    ha-textfield,
    ha-icon-picker {
      margin-top: 8px;
      display: block;
    }
    .timer-values {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 8px;
      margin-top: 16px;
    }
    .timer-values label {
      display: flex;
      align-items: center;
    }
    .timer-values input {
      margin-right: 8px;
    }
    .timer-values-label {
      margin-top: 24px;
      margin-bottom: 8px;
      margin-right: 6px;
      margin-left: 6px;
    }      
  `;
}

customElements.define(
  "switcher-boiler-card-editor",
  SwitcherBoilerCardEditor
);
