import { css } from 'lit';

export default css`

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