import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<sl-search-select>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sl-search-select></sl-search-select> `);

    expect(el).to.exist;
  });
});
