import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  /** The popup */
  .search-select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .search-select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .search-select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .search-select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .search-select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .search-select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .search-select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .search-select:not(.search-select--disabled):hover .search-select__display-input {
    color: var(--sl-input-color-hover);
  }

  .search-select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .search-select--multiple:not(.search-select--placeholder-visible) .search-select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .search-select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .search-select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .search-select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .search-select--disabled .search-select__tags,
  .search-select--disabled .search-select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .search-select--standard .search-select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .search-select--standard.search-select--disabled .search-select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .search-select--standard:not(.search-select--disabled).search-select--open .search-select__combobox,
  .search-select--standard:not(.search-select--disabled).search-select--focused .search-select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .search-select--filled .search-select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .search-select--filled:hover:not(.search-select--disabled) .search-select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .search-select--filled.search-select--disabled .search-select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .search-select--filled:not(.search-select--disabled).search-select--open .search-select__combobox,
  .search-select--filled:not(.search-select--disabled).search-select--focused .search-select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .search-select--small .search-select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .search-select--small .search-select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .search-select--small .search-select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .search-select--small.search-select--multiple:not(.search-select--placeholder-visible)
    .search-select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .search-select--small.search-select--multiple:not(.search-select--placeholder-visible) .search-select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .search-select--small .search-select__tags {
    gap: 2px;
  }

  .search-select--medium .search-select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .search-select--medium .search-select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .search-select--medium .search-select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .search-select--medium.search-select--multiple:not(.search-select--placeholder-visible)
    .search-select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .search-select--medium.search-select--multiple:not(.search-select--placeholder-visible) .search-select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .search-select--medium .search-select__tags {
    gap: 3px;
  }

  .search-select--large .search-select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .search-select--large .search-select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .search-select--large .search-select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .search-select--large.search-select--multiple:not(.search-select--placeholder-visible)
    .search-select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .search-select--large.search-select--multiple:not(.search-select--placeholder-visible) .search-select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .search-select--large .search-select__tags {
    gap: 4px;
  }

  /* Pills */
  .search-select--pill.search-select--small .search-select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .search-select--pill.search-select--medium .search-select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .search-select--pill.search-select--large .search-select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .search-select__prefix,
  .search-select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .search-select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .search-select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .search-select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .search-select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .search-select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .search-select--open .search-select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .search-select__listbox {
    flex-wrap: wrap;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .search-select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .search-select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
  .search-select__search-input-container {
    position: relative;
  }.search-select__search-input {
    letter-spacing: var(--sl-input-letter-spacing);
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0px;
    color: var(--sl-input-color);
    border: medium;
    background: inherit;
    box-shadow: none;
    margin: 0px;
    cursor: inherit;
    appearance: none;
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
    width: 100%;
    display: block:
  }
  .search-select__search-input:hover {
    color: var(--sl-input-color-hover);
  }
  .search-select__search-input:focus {
    outline: none;
  }
  .search-select__search-spinner {
    position: absolute;
    right: 0;
    top: 0;
    margin-left: 4px;
    margin-right: 4px;
    margin-top: 6px;
  }
`;
