// Обработка отправки формы
let num = 0;
function getContentForm () {
    let name = document.getElementById('name')?.value;
    let email = document.getElementById('email')?.value;
    let message = document.getElementById('message')?.value;
    let date = new Date().toLocaleString();
    console.log("content" + num++);
    console.log(name);
    console.log(email);
    console.log(message);

    // Добавляем сообщение в историю
    let feedbackHistory = document.getElementById('feedback-history');
    feedbackHistory.innerHTML += `
        <div>
            <p>Дата: ${date}</p>
            <p>Имя: ${name}</p>
            <p>Email: ${email}</p>
            <p>Сообщение: ${message}</p>
        </div>
    `;
};

function clearContentForm() {
   document.getElementById('name').value='';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}
