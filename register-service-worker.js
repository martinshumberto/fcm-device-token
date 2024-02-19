if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then((reg) => {
        console.log(`Service Worker Registration (Scope: ${reg.scope})`);
      })
      .catch((error) => {
        const msg = `Service Worker Error (${error})`;
        console.error(msg);
      });
  });
} else {
  console.warn("Service Worker Not Available");
}
