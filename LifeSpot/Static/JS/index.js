/*// Запросим возраст пользователя и сохраним в переменную
let age = prompt("Пожалуйста, введите ваш возраст");

if (age >= 18) {
    // Те, кто старше 18, увидят приветствие и будут направлены на сайт
    alert("Приветствуем на LifeSpot! " + new Date().toLocaleString());
}
else {
    // Если введенное число < 18, либо если введено не число -
    // пользователь будет перенаправлен
    alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
    window.location.href = "http://www.google.com"
}*/

document.addEventListener("DOMContentLoaded", function () {
    let inputElement = document.querySelector(".search-field");
   // let buttonElement = document.querySelector(".search-button");

    // Фильтрация при вводе
    inputElement.addEventListener("input", filterVideos);

    // Фильтрация при клике на кнопку
   // buttonElement.addEventListener("click", filterVideos);

    function filterVideos() {
        let inputString = inputElement.value.toLowerCase();
        let elements = document.getElementsByClassName("video-container");

        for (let e of  elements) {
            let videoText = e.querySelector(".video-title").innerText.toLowerCase();
            e.style.display = videoText.includes(inputString) ? 'block' : 'none';
        }
    }
});
