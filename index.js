const updates = document.querySelectorAll(".ref");
const count = document.querySelector('.count');
const readAll = document.querySelector('.read-all')
const board = document.querySelector('main');
const message = document.querySelector('.message');


updates.forEach(element => {
    element.setAttribute('id', 'active');
});

showCount();
readAll.addEventListener('click', reset);
board.addEventListener('click', read);

function showCount() {
    const unread = document.querySelectorAll('#active');
    count.innerText = unread.length;
}

function reset() {
    if (readAll.textContent.includes('Mark all as read')) {
        updates.forEach(element => {
            element.removeAttribute('id', 'active');
        })
        message.style.display = 'inherit';
        readAll.innerText = 'Mark all as unread';
        showCount();
    } else {
        updates.forEach(element => {
            element.setAttribute('id', 'active');
        });
        message.style.display = 'none';
        readAll.innerText = 'Mark all as read';
        showCount();
    }
}

function read(e) {
    if (e.target.id === 'active' && e.target.dataset.update === 'message') {
        e.target.removeAttribute('id', 'active');
        message.style.display = 'inherit';
        showCount();
    } else if (e.target.id === 'active' || e.target.dataset.update !== 'message') {
        e.target.removeAttribute('id', 'active');
        showCount();
    }
}


