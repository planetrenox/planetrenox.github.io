import { html, render } from 'https://cdn.jsdelivr.net/npm/lit-html@2.7.2/+esm';
import { CodeJar } from 'https://cdn.jsdelivr.net/npm/codejar@3.6.0/+esm';
import { withLineNumbers } from 'https://cdn.jsdelivr.net/npm/codejar@3.6.0/linenumbers.js';
import './sight.js';

const piercer = () => {
  const appRoot = document.createElement('div');
  document.body.appendChild(appRoot);

  let isEditing = false;
  let sourceCode = '';

  const toggleView = () => {
    isEditing = !isEditing;
    render(app(), appRoot);
  };

  const saveSource = () => {
    document.cookie = `sourceCode=${encodeURIComponent(sourceCode)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  };

  const loadSource = () => {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === 'sourceCode') {
        sourceCode = decodeURIComponent(value);
        break;
      }
    }
  };

  const consoleLog = (...args) => {
    const logElement = document.getElementById('console-log');
    logElement.innerHTML += `<pre>${args.map(arg => JSON.stringify(arg, null, 2)).join(' ')}</pre>`;
  };

  const app = () => html`
    <div>
      ${isEditing ? html`
        <div class="editor"></div>
        <button @click=${toggleView}>View</button>
      ` : html`
        <div class="preview"></div>
        <button @click=${toggleView}>Edit</button>
      `}
      <div id="console-log"></div>
    </div>
  `;

  loadSource();

  if (isEditing) {
    setTimeout(() => {
      const editorElement = appRoot.querySelector('.editor');
      const jar = CodeJar(editorElement, withLineNumbers(Prism.highlightElement), {
        tab: ' '.repeat(2),
      });
      jar.updateCode(sourceCode);
      jar.onUpdate(code => {
        sourceCode = code;
        saveSource();
      });
    });
  } else {
    const previewElement = appRoot.querySelector('.preview');
    const tempElement = document.createElement('div');
    tempElement.innerHTML = sourceCode;
    previewElement.appendChild(tempElement);

    const scriptElements = tempElement.getElementsByTagName('script');
    for (const scriptElement of scriptElements) {
      const newScriptElement = document.createElement('script');
      newScriptElement.textContent = scriptElement.textContent;
      document.body.appendChild(newScriptElement);
    }
  }

  window.console.log = consoleLog;
};

piercer();
