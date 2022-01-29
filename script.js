const plus = document.querySelector('.plus'),
    minus = document.querySelector('.minus'),
    num = document.querySelector('.num');

update = (n) => {
    num.innerText = ( n <10 && n > 0) ? `${n}` : n;
}

let a = 1;

plus.addEventListener('click', () => update(++a));
minus.addEventListener('click', () => update(--a));