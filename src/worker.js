// eslint-disable-next-line no-restricted-globals
addEventListener('message', (event) => {
  postMessage(event.data + ' This was handled on a separate thread!');
});
