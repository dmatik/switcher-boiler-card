
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
  { name: "electrical_current", selector: { entity: { domain: ["sensor"] } } },
  { name: "additional_sensor", selector: { entity: { domain: ["sensor"] } } },
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
    this._config = config;
  }

  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      />
    `;
  }

  _valueChanged = (ev) =>
    fireEvent(this, "config-changed", { config: ev.detail.value });

  _computeLabelCallback = (schema) => {
    const { name } = schema;
    switch (name) {
      case "time_left":
        return "Time Left Sensor (Optional)";
      case "electrical_current":
        return "Electrical Current Sensor (Optional)";
      case "additional_sensor":
        return "Additional Sensor (Optional)";         
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
  `;
}

customElements.define(
  "switcher-boiler-card-editor",
  SwitcherBoilerCardEditor
);
