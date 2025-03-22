import { css } from 'lit';

export default css`

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
      max-width: 100%;
      overflow: hidden;      
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
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
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

  .icon-container.cold {
    background-color: rgba(33, 150, 243, 0.2); /* Light blue for low temp */
  }

  .icon-container.warm {
    background-color: rgba(255, 111, 34, 0.2); /* Light orange for mid temp */
  }

  .icon-container.hot {
    background-color: rgba(245, 68, 54, 0.2); /* Light red for high temp */
  }  

  .icon {
    font-size: 24px;
    transition: color 0.3s;
    --mdc-icon-size: 24px;
  }

  .icon.on {
    color: #F54436; /* Red for "on" state */
  }

  .icon.off {
    color: var(--state-light-off-color, var(--state-light-inactive-color, var(--state-inactive-color)));
  }

  .icon-sensor {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 0px;
    padding-top: 2px;
  }

  .icon-sensor.on {
    color: #F54436; /* Red for "on" state */
  }

  .icon-sensor.off {
    color: var(--primary-text-color);
  }

  .icon-sensor.cold {
    color: rgb(33, 150, 243); /* Blue for low temp */
  }

  .icon-sensor.warm {
    color: rgb(255, 111, 34); /* Orange for mid temp */
  }

  .icon-sensor.hot {
    color: rgb(245, 68, 54); /* Red for high temp */
  }    

  .label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 12px;
    font-size: 14px;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;    
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
    max-width: 100%;
  }

`;