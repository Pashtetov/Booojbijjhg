let currentSlide = 1;

// Функция перехода на следующий слайд
function nextSlide() {
    document.getElementById(`slide${currentSlide}`).classList.remove('active');
    currentSlide++;
    document.getElementById(`slide${currentSlide}`).classList.add('active');
}

// Показываем первый слайд
document.getElementById(`slide${currentSlide}`).classList.add('active');

// Логика убегающей кнопки
const button = document.getElementById("moving-button");
button.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

// Действие при нажатии на кнопку (например, вывести сообщение)
function finalAnswer() {
    alert("Поздравляем! Вы прошли тест!");
}
