import { pushNotificationService } from "./utils/pushNotification.js";
import { indexedDBService } from "./utils/indexedDB.js";

class PWAInitializer {
  constructor() {
    this.init();
  }

  async init() {
    // Inisialisasi service worker dan push notifications
    await pushNotificationService.init();
    // Inisialisasi IndexedDB
    await indexedDBService.init();
  }
}

// Inisialisasi fitur PWA saat DOM dimuat
document.addEventListener("DOMContentLoaded", () => {
  new PWAInitializer();
});
