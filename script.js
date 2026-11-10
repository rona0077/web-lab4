function calculateTotal(event) {
    // Отменяем стандартную отправку формы (перезагрузку страницы)
    event.preventDefault();

    // Получаем выбранные значения из формы
    const pricePerSecond = Number(document.getElementById('type').value);
    const duration = Number(document.getElementById('duration').value);

    // Проверка на корректность ввода (защита от отрицательных чисел)
    if (duration <= 0) {
        alert("Пожалуйста, введите корректную длительность.");
        return;
    }

    // Считаем итоговую стоимость
    const total = pricePerSecond * duration;

    // Форматируем число с разделителями тысяч (например, 15 000)
    const formattedTotal = total.toLocaleString('ru-RU');

    // Выводим результат в тег <p id="result-text">
    document.getElementById('result-text').textContent = 
        'Итого: ' + formattedTotal + ' руб.';

    // Добавляем класс 'show' для плавного появления блока с результатом (анимация)
    document.getElementById('result-box').classList.add('show');
}