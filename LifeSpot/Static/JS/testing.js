// Получим коллекцию всех элементов страницы
let elements = document.getElementsByTagName('*');

let names='';
for (let e of  elements) {
    names += e.tagName + '\n';
}

// Выведем результат в уведомление
alert(`Количество элементов на странице:  ${elements.length} \ntagName :\n${names} `);