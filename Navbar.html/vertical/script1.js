let lst = document.querySelectorAll('.list');
for (let i = 0; i < lst.length; i++) {
    lst[i].onclick = function() {
        let j = 0;
        while (j < lst.length) {
            lst[j++].className = 'list';
        }
        lst[i].className = 'list active';
    }
}

let menuToggle = document.querySelector('.toggle');
let navBar = document.querySelector('.nav');
menuToggle.onclick = function() {
    menuToggle.classList.toggle('active')
    navBar.classList.toggle('active')
};