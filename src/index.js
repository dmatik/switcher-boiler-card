import { SwitcherBoilerCard } from "./card";
import { SwitcherBoilerCardEditor } from "./editor";

customElements.define("switcher-boiler-card", SwitcherBoilerCard);
customElements.define("switcher-boiler-card-editor", SwitcherBoilerCardEditor);

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