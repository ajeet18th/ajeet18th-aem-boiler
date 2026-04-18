import callAppBuilder from '../../scripts/appbuilder.js';

export default async function decorate(block) {
  block.textContent = 'Loading App Builder...';

  try {
    const data = await callAppBuilder('AEM Author');

    const div = document.createElement('div');
    div.innerHTML = `
      <h2>Response from App Builder</h2>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;

    block.textContent = '';
    block.append(div);
  } catch (e) {
    block.textContent = 'Failed to load App Builder data';
  }
}
