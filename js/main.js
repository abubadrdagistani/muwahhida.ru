document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = 'Вы успешно зарегистрировались!';
    
    document.body.appendChild(notification);
    
    setTimeout(function() {
        notification.classList.add('show');
        setTimeout(function() {
            document.body.removeChild(notification);
        }, 3000); // Уведомление исчезнет через 3 секунды
    }, 100); // Задержка перед добавлением класса "show"
});