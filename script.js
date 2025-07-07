const input = document.getElementById('input');
const itemsContainer = document.getElementById('items');

function addListItem() {
    const text = input.value.trim().toLowerCase();

    if (text === '') {
        alert("Пожалуйста, введите текст!");
        return
    }
}