let session = new Map();
function handleSession() {
    // Сохраним время начала сессии
    session.set("startDate", new Date().toLocaleString())
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent)
}

function checkAge() {
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

    if (session.get("age") >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

// Логирование сессии (объявлено через expression)
let sessionLog = function logSession() {
    for (let result of session) {
        console.log(result)
    }
}


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

function filterContent() {

    
    let elements = document.getElementsByClassName("video-container");

    
    for (let e of elements) {
       
        let videoText = e.querySelector(".video-title").innerText;
        console.log("Значение videoText:  " + videoText);
        
        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            
            e.style.display = 'none';
        } else {
            
            e.style.display = 'block';
        }
    }
}

    

    //Запускаем человечка
setTimeout(function () {
    const element = document.querySelector('.walker');
            element.style.display = 'block'; // Показываем элемент
            element.classList.add('walker'); // Добавляем класс для запуска анимации
        }, 1000); // Задержка в n секунд перед запуском анимации







