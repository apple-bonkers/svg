importScripts("x3lwy/khtg8f.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

function skipProxy(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname;
    if (parsed.origin !== self.location.origin && (host === "cdn.jsdelivr.net" || host.endsWith(".jsdelivr.net") || host === "luminsdk.com" || host.endsWith(".luminsdk.com"))) {
      return true;
    }
    return /^\/(?:stores|covers|cdn)\//.test(parsed.pathname);
  } catch {
    return false;
  }
}

self.addEventListener("fetch", (event) => {
  if (skipProxy(event.request.url)) return;
  if (_iyrvp9y.shouldRoute(event)) {
    event.respondWith(_iyrvp9y.route(event));
  }
});
