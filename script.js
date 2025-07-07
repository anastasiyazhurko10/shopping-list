const input = document.getElementById('input');
const itemsContainer = document.getElementById('items');

function addListItem() {
    const text = input.value.trim().toLowerCase();

    if (text === '') {
        alert("Пожалуйста, введите текст!");
        return
    }

    const li = document.createElement('li');
    li.textContent = text;

    li.addEventListener('click', function() {
        li.classList.toggle('done')
    });
}