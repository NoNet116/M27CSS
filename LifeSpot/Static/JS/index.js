

document.addEventListener("DOMContentLoaded", function () {
    let inputElement = document.querySelectorAll(".search-field")[0];
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

function filterContent(inputText) {

    console.log("Значение inputText:  " + inputText);
    let elements = document.getElementsByClassName("video-container");

    
    for (let e of elements) {
       
        let videoText = e.querySelector(".video-title").innerText;
        console.log("Значение videoText:  " + videoText);
        
        if (!videoText.toLowerCase().includes(inputText().toLowerCase())) {
            
            e.style.display = 'none';
        } else {
            
            e.style.display = 'block';
        }
    }
}


function handleSession() {

    // создадим объект Map для хранения сессии
    let session = new Map();
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent)

    // Запросим возраст пользователя и тоже сохраним
    session.set("age", prompt("Пожалуйста, введите ваш возраст"))

    // Проверка на возраст и сохранение сессии
    if (session.get("age") >= 18) {
        let startDate = new Date().toLocaleString();

        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
        session.set("startDate", startDate)
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
    // Вывод в консоль
    for (let result of session) {
        console.log(result)
    }
}

/*
function filterContent() {


    let inputString = document.getElementsByTagName("input")[1].value.toLowerCase();
    console.log("Значение inputString:  " + inputString);

    let elements = document.getElementsByClassName("video-container");


    for (let e of elements) {

        let videoText = e.querySelector(".video-title").innerText;
        console.log("Значение videoText:  " + videoText);

        if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {

            e.style.display = 'none';
        } else {

            e.style.display = 'block';
        }
    }
}
*/

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

