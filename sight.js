import { html, render } from 'https://cdn.jsdelivr.net/npm/lit-html@2.7.2/+esm';

const sightTemplate = html`
  <script data-goatcounter="https://ibetyoucountsheep.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
`;

const injectGoatCounter = () => {
  if (!document.querySelector('[data-goatcounter]')) {
    render(sightTemplate, document.head);
  }
};

injectGoatCounter();
