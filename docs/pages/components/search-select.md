---
meta:
  title: Search select
  description: Search Select allow you to choose items from a menu of predefined options and filter options by keyword
layout: component
---

```html:preview
<sl-search-select>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-option value="option-4">Option 4</sl-option>
  <sl-option value="option-5">Option 5</sl-option>
  <sl-option value="option-6">Option 6</sl-option>
</sl-search-select>
```

```jsx:react
import SlOption from '@shoelace-style/shoelace/dist/react/option';
import SlSearchSelect from '@shoelace-style/shoelace/dist/react/search-select';

const App = () => (
  <SlSearchSelect>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
    <SlOption value="option-4">Option 4</SlOption>
    <SlOption value="option-5">Option 5</SlOption>
    <SlOption value="option-6">Option 6</SlOption>
  </SlSearchSelect>
);
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Loading option reacting to a search

When the user fills out the search box, you may react using a provided callback function. You need a function that will be called when the search query changes. This function will receive the search query and a callback function. You can use the callback function to add new options to the select.

```html:preview
<script>
  globalThis.handleSearchCallback = function(query, callback) {
    window.setTimeout(() => {
      callback([['option-1', 'Option 1'], ['option-2', 'Option 2']]);
    }, 1000);
  }
</script>
<sl-search-select search-callback="handleSearchCallback">
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-option value="option-4">Option 4</sl-option>
  <sl-option value="option-5">Option 5</sl-option>
  <sl-option value="option-6">Option 6</sl-option>
</sl-search-select>
```

```jsx:react
import SlOption from '@shoelace-style/shoelace/dist/react/option';
import SlSearchSelect from '@shoelace-style/shoelace/dist/react/search-select';
const handleSearchCallback = function(query, callback) {
  window.setTimeout(() => {
    callback([[1, 'Option 1'], [2, 'Option 2']]);
  }, 1000);
}

const App = () => (
  <SlSearchSelect search-callback={handleSearchCallback}>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
    <SlOption value="option-4">Option 4</SlOption>
    <SlOption value="option-5">Option 5</SlOption>
    <SlOption value="option-6">Option 6</SlOption>
  </SlSearchSelect>
);
```

### Labels

Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<sl-search-select label="Select one">
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
</sl-search-select>
```

```jsx:react
import SlOption from '@shoelace-style/shoelace/dist/react/option';
import SlSearchSelect from '@shoelace-style/shoelace/dist/react/search-select';

const App = () => (
  <SlSearchSelect label="Select one">
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSearchSelect>
);
```

### Help Text

Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<sl-search-select label="Experience" help-text="Please tell us your skill level.">
  <sl-option value="1">Novice</sl-option>
  <sl-option value="2">Intermediate</sl-option>
  <sl-option value="3">Advanced</sl-option>
</sl-search-select>
```

```jsx:react
import SlOption from '@shoelace-style/shoelace/dist/react/option';
import SlSearchSelect from '@shoelace-style/shoelace/dist/react/search-select';

const App = () => (
  <SlSearchSelect label="Experience" help-text="Please tell us your skill level.">
    <SlOption value="1">Novice</SlOption>
    <SlOption value="2">Intermediate</SlOption>
    <SlOption value="3">Advanced</SlOption>
  </SlSearchSelect>
);
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<sl-search-select placeholder="Select one">
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
</sl-search-select>
```

```jsx:react
import SlOption from '@shoelace-style/shoelace/dist/react/option';
import SlSearchSelect from '@shoelace-style/shoelace/dist/react/search-select';

const App = () => (
  <SlSearchSelect placeholder="Select one">
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSearchSelect>
);
```

### Clearable

Use the `clearable` attribute to make the control clearable. The clear button only appears when an option is selected.

```html:preview
<sl-search-select clearable value="option-1">
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
</sl-search-select>
```

```jsx:react
import SlOption from '@shoelace-style/shoelace/dist/react/option';
import SlSearchSelect from '@shoelace-style/shoelace/dist/react/search-select';

const App = () => (
  <SlSearchSelect placeholder="Clearable" clearable>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSearchSelect>
);
```

### Filled Selects

Add the `filled` attribute to draw a filled select.

```html:preview
<sl-search-select filled>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
</sl-search-select>
```

```jsx:react
import SlOption from '@shoelace-style/shoelace/dist/react/option';
import SlSearchSelect from '@shoelace-style/shoelace/dist/react/search-select';

const App = () => (
  <SlSearchSelect filled>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSearchSelect>
);
```

### Pill

Use the `pill` attribute to give selects rounded edges.

```html:preview
<sl-search-select pill>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
</sl-search-select>
```

```jsx:react
import SlOption from '@shoelace-style/shoelace/dist/react/option';
import SlSearchSelect from '@shoelace-style/shoelace/dist/react/search-select';

const App = () => (
  <SlSearchSelect pill>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSearchSelect>
);
```

### Disabled

Use the `disabled` attribute to disable a select.

```html:preview
<sl-search-select placeholder="Disabled" disabled>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
</sl-search-select>
```

```jsx:react
import SlOption from '@shoelace-style/shoelace/dist/react/option';
import SlSearchSelect from '@shoelace-style/shoelace/dist/react/search-select';

const App = () => (
  <SlSearchSelect placeholder="Disabled" disabled>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSearchSelect>
);
```

### Multiple

To allow multiple options to be selected, use the `multiple` attribute. It's a good practice to use `clearable` when this option is enabled. To set multiple values at once, set `value` to a space-delimited list of values.

```html:preview
<sl-search-select label="Select a Few" value="option-1 option-2 option-3" multiple clearable>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-option value="option-4">Option 4</sl-option>
  <sl-option value="option-5">Option 5</sl-option>
  <sl-option value="option-6">Option 6</sl-option>
</sl-search-select>
```

```jsx:react
import SlOption from '@shoelace-style/shoelace/dist/react/option';
import SlSearchSelect from '@shoelace-style/shoelace/dist/react/search-select';

const App = () => (
  <SlSearchSelect label="Select a Few" value={["option-1", "option-2", "option-3"]} multiple clearable>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
    <SlOption value="option-4">Option 4</SlOption>
    <SlOption value="option-5">Option 5</SlOption>
    <SlOption value="option-6">Option 6</SlOption>
  </SlSearchSelect>
);
```

:::tip
Note that multi-select options may wrap, causing the control to expand vertically. You can use the `max-options-visible` attribute to control the maximum number of selected options to show at once.
:::

### Setting Initial Values

Use the `value` attribute to set the initial selection.

When using `multiple`, the `value` _attribute_ uses space-delimited values to select more than one option. Because of this, `<sl-option>` values cannot contain spaces. If you're accessing the `value` _property_ through Javascript, it will be an array.

```html:preview
<sl-search-select value="option-1 option-2" multiple clearable>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-option value="option-4">Option 4</sl-option>
</sl-search-select>
```

```jsx:react
import SlDivider from '@shoelace-style/shoelace/dist/react/divider';
import SlOption from '@shoelace-style/shoelace/dist/react/option';
import SlSearchSelect from '@shoelace-style/shoelace/dist/react/search-select';

const App = () => (
  <SlSearchSelect value={["option-1", "option-2"]} multiple clearable>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSearchSelect>
);
```

### Grouping Options

Use `<sl-divider>` to group listbox items visually. You can also use `<small>` to provide labels, but they won't be announced by most assistive devices.

```html:preview
<sl-search-select>
  <small>Section 1</small>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-divider></sl-divider>
  <small>Section 2</small>
  <sl-option value="option-4">Option 4</sl-option>
  <sl-option value="option-5">Option 5</sl-option>
  <sl-option value="option-6">Option 6</sl-option>
</sl-search-select>
```

```jsx:react
import SlOption from '@shoelace-style/shoelace/dist/react/option';
import SlSearchSelect from '@shoelace-style/shoelace/dist/react/search-select';

const App = () => (
  <SlSearchSelect>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
    <SlOption value="option-4">Option 4</SlOption>
    <SlOption value="option-5">Option 5</SlOption>
    <SlOption value="option-6">Option 6</SlOption>
  </SlSearchSelect>
);
```

### Sizes

Use the `size` attribute to change a select's size. Note that size does not apply to listbox options.

```html:preview
<sl-search-select placeholder="Small" size="small">
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
</sl-search-select>

<br />

<sl-search-select placeholder="Medium" size="medium">
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
</sl-search-select>

<br />

<sl-search-select placeholder="Large" size="large">
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
</sl-search-select>
```

```jsx:react
import SlOption from '@shoelace-style/shoelace/dist/react/option';
import SlSearchSelect from '@shoelace-style/shoelace/dist/react/search-select';

const App = () => (
  <>
    <SlSearchSelect placeholder="Small" size="small">
      <SlOption value="option-1">Option 1</SlOption>
      <SlOption value="option-2">Option 2</SlOption>
      <SlOption value="option-3">Option 3</SlOption>
    </SlSearchSelect>

    <br />

    <SlSearchSelect placeholder="Medium" size="medium">
      <SlOption value="option-1">Option 1</SlOption>
      <SlOption value="option-2">Option 2</SlOption>
      <SlOption value="option-3">Option 3</SlOption>
    </SlSearchSelect>

    <br />

    <SlSearchSelect placeholder="Large" size="large">
      <SlOption value="option-1">Option 1</SlOption>
      <SlOption value="option-2">Option 2</SlOption>
      <SlOption value="option-3">Option 3</SlOption>
    </SlSearchSelect>
  </>
);
```

### Placement

The preferred placement of the select's listbox can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.

```html:preview
<sl-search-select placement="top">
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
</sl-search-select>
```

```jsx:react
import SlOption from '@shoelace-style/shoelace/dist/react/option';
import SlSearchSelect from '@shoelace-style/shoelace/dist/react/search-select';

const App = () => (
  <SlSearchSelect placement="top">
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlDropdown>
);
```

### Prefix & Suffix

Use the `prefix` and `suffix` slots to add presentational icons and text. Avoid slotting in interactive elements, such as buttons, links, etc.

```html:preview
<sl-search-select placeholder="Small" size="small" clearable>
  <sl-icon name="house" slot="prefix"></sl-icon>
  <sl-badge slot="suffix">New</sl-badge>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
</sl-search-select>
<br />
<sl-search-select placeholder="Medium" size="medium" clearable>
  <sl-icon name="house" slot="prefix"></sl-icon>
  <sl-badge slot="suffix">New</sl-badge>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
</sl-search-select>
<br />
<sl-search-select placeholder="Large" size="large" clearable>
  <sl-icon name="house" slot="prefix"></sl-icon>
  <sl-badge slot="suffix">New</sl-badge>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
</sl-search-select>
```

```jsx:react
import SlIcon from '@shoelace-style/shoelace/dist/react/icon';
import SlOption from '@shoelace-style/shoelace/dist/react/option';
import SlSearchSelect from '@shoelace-style/shoelace/dist/react/search-select';

const App = () => (
  <>
    <SlSearchSelect placeholder="Small" size="small">
      <SlIcon name="house" slot="prefix"></SlIcon>
      <SlOption value="option-1">Option 1</SlOption>
      <SlOption value="option-2">Option 2</SlOption>
      <SlOption value="option-3">Option 3</SlOption>
    </SlSearchSelect>
    <br />
    <SlSearchSelect placeholder="Medium" size="medium">
      <SlIcon name="house" slot="prefix"></SlIcon>
      <SlOption value="option-1">Option 1</SlOption>
      <SlOption value="option-2">Option 2</SlOption>
      <SlOption value="option-3">Option 3</SlOption>
    </SlSearchSelect>
    <br />
    <SlSearchSelect placeholder="Large" size="large">
      <SlIcon name="house" slot="prefix"></SlIcon>
      <SlOption value="option-1">Option 1</SlOption>
      <SlOption value="option-2">Option 2</SlOption>
      <SlOption value="option-3">Option 3</SlOption>
    </SlSearchSelect>
  </>
);
```

### Custom Tags

When multiple options can be selected, you can provide custom tags by passing a function to the `getTag` property. Your function can return a string of HTML, a <a href="https://lit.dev/docs/templates/overview/">Lit Template</a>, or an [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement). The `getTag()` function will be called for each option. The first argument is an `<sl-option>` element and the second argument is the tag's index (its position in the tag list).

Remember that custom tags are rendered in a shadow root. To style them, you can use the `style` attribute in your template or you can add your own [parts](/getting-started/customizing/#css-parts) and target them with the [`::part()`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) selector.

```html:preview
<sl-search-select
  placeholder="Select one"
  value="email phone"
  multiple
  clearable
  class="custom-tag"
>
  <sl-option value="email">
    <sl-icon slot="prefix" name="envelope"></sl-icon>
    Email
  </sl-option>
  <sl-option value="phone">
    <sl-icon slot="prefix" name="telephone"></sl-icon>
    Phone
  </sl-option>
  <sl-option value="chat">
    <sl-icon slot="prefix" name="chat-dots"></sl-icon>
    Chat
  </sl-option>
</sl-search-select>

<script type="module">
  const select = document.querySelector('.custom-tag');

  select.getTag = (option, index) => {
    // Use the same icon used in the <sl-option>
    const name = option.querySelector('sl-icon[slot="prefix"]').name;

    // You can return a string, a Lit Template, or an HTMLElement here
    return `
      <sl-tag removable>
        <sl-icon name="${name}" style="padding-inline-end: .5rem;"></sl-icon>
        ${option.getTextLabel()}
      </sl-tag>
    `;
  };
</script>
```

### Lazy loading options

Lazy loading options is very hard to get right. `<sl-search-select>` largely follows how a native `<select>` works.

Here are the following conditions:

- If a `<sl-search-select>` is created without any options, but is given a `value` attribute, its `value` will be `""`, and then when options are added, if any of the options have a value equal to the `<sl-search-select>` value, the value of the `<sl-search-select>` will equal that of the option.

EX: `<sl-search-select value="foo">` will have a value of `""` until `<sl-option value="foo">Foo</sl-option>` connects, at which point its value will become `"foo"` when submitting.

- If a `<sl-search-select multiple>` with an initial value has multiple values, but only some of the options are present, it will only respect the options that are present, and if a selected option is loaded in later, _AND_ the value of the select has not changed via user interaction or direct property assignment, it will add the selected option to the form value and to the `.value` of the select.

This can be hard to conceptualize, so heres a fairly large example showing how lazy loaded options work with `<sl-search-select>` and `<sl-search-select multiple>` when given initial value attributes. Feel free to play around with it in a codepen.

```html:preview
<form id="lazy-options-example">
  <div>
    <sl-search-select name="select-1" value="foo" label="Single select (with existing options)">
      <sl-option value="bar">Bar</sl-option>
      <sl-option value="baz">Baz</sl-option>
    </sl-search-select>
    <br>
    <sl-button type="button">Add "foo" option</sl-button>
  </div>

  <br>

  <div>
    <sl-search-select name="select-2" value="foo" label="Single select (with no existing options)">
    </sl-search-select>
    <br>
    <sl-button type="button">Add "foo" option</sl-button>
  </div>

  <br>

  <div>
    <sl-search-select name="select-3" value="foo bar baz" multiple label="Multiple Select (with existing options)">
      <sl-option value="bar">Bar</sl-option>
      <sl-option value="baz">Baz</sl-option>
    </sl-search-select>
    <br>
    <sl-button type="button">Add "foo" option</sl-button>
  </div>

  <br>

  <div>
    <sl-search-select name="select-4" value="foo" multiple label="Multiple Select (with no existing options)">
    </sl-search-select>
    <br>
    <sl-button type="button">Add "foo" option</sl-button>
  </div>

  <br><br>

  <div style="display: flex; gap: 16px;">
    <sl-button type="reset">Reset</sl-button>
    <sl-button type="submit" variant="brand">Show FormData</sl-button>
  </div>

  <br>

  <pre hidden><code id="lazy-options-example-form-data"></code></pre>

  <br>
</form>

<script type="module">
  function addFooOption(e) {
    const addFooButton = e.target.closest("sl-button[type='button']")
    if (!addFooButton) {
      return
    }
    const select = addFooButton.parentElement.querySelector("sl-search-select")
    if (select.querySelector("sl-option[value='foo']")) {
      // Foo already exists. no-op.
      return
    }
    const option = document.createElement("sl-option")
    option.setAttribute("value", "foo")
    option.innerText = "Foo"
    select.append(option)
  }
  function handleLazySubmit (event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const codeElement = document.querySelector("#lazy-options-example-form-data")
    const obj = {}
    for (const key of formData.keys()) {
      const val = formData.getAll(key).length > 1 ? formData.getAll(key) : formData.get(key)
      obj[key] = val
    }
    codeElement.textContent = JSON.stringify(obj, null, 2)
    const preElement = codeElement.parentElement
    preElement.removeAttribute("hidden")
  }
  const container = document.querySelector("#lazy-options-example")
  container.addEventListener("click", addFooOption)
  container.addEventListener("submit", handleLazySubmit)
</script>
```

:::warning
Be sure you trust the content you are outputting! Passing unsanitized user input to `getTag()` can result in XSS vulnerabilities.
:::
