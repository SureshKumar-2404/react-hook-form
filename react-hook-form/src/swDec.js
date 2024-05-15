export default function swDev() {
    let swUrl = `http://localhost:5173/sw.js`;
    console.log('swUrl', swUrl);
    navigator.serviceWorker.register(swUrl)
        .then((response) => {
            console.log('response', response);
        })
        .catch((error) => {
            console.error('Error registering service worker:', error);
        });
}
