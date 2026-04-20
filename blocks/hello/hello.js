export default async function decorate(block) {

  const actionURL =
    "https://993145-ajeetdemo-stage.adobeio-static.net/api/v1/web/Ajeetdemo/hello";

  try {
    const resp = await fetch(actionURL);
    const data = await resp.json();

    console.log("Hello action response:", data);

    block.innerHTML = `
      <div style="padding:20px;border:1px solid #ccc">
        <h2>App Builder Response</h2>
        <p><b>Message:</b> ${data.message}</p>
        <p><b>Time:</b> ${data.time}</p>
      </div>
    `;
  } catch (e) {
    console.error(e);
    block.innerHTML = "Failed to call App Builder action";
  }
}