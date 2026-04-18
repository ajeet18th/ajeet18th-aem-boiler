import callAppBuilder from '../../scripts/appbuilder.js';

export default async function decorate(block) {
  const data = await callAppBuilder('AEM Author');

  const div = document.createElement('div');
  div.innerHTML = `
    <h2>Response from App Builder</h2>
    <pre>${JSON.stringify(data, null, 2)}</pre>
  `;

  block.append(div);
}
