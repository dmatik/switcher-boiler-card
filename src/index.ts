import { SwitcherBoilerCard } from "./card";
import { SwitcherBoilerCardEditor } from "./editor";

declare global {
  interface Window {
    customCards: Array<Object>;
  }
}

console.groupCollapsed(`%c SWITCHER-BOILER-CARD %c v${'1.2.5'}`, "color: white; background: #F54436; font-weight: bold", "color: #F54436; font-weight: bold"),
console.log("Readme:", "https://github.com/dmatik/switcher-boiler-card"),
console.groupEnd();

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
