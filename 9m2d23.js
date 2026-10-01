importScripts("cwfdf/754sc3.js");

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
  if (_18coiqw.shouldRoute(event)) {
    event.respondWith(_18coiqw.route(event));
  }
});
