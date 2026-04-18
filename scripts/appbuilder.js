export default async function callAppBuilder(name) {
  const url = 'https://993145-ajeetdemo-stage.adobeio-static.net/api/v1/web/Ajeetdemo/hello';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      apikey: 'my-secret-key-123',
      name,
    }),
  });

  if (!response.ok) {
    throw new Error('App Builder call failed');
  }

  return response.json();
}
