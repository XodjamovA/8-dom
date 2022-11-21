/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let imgs = document.querySelectorAll('.promo__adv img')
let div = document.querySelector('.promo__adv div')
let bg = document.querySelector('.promo__bg')


// div.style.display = "none"
imgs.forEach(img => {
    img.style.display = "none"
})

bg.style.background = `url("./img/bg.jpg") center no-repeat`
bg.style.width = "100%"
bg.style.height = "65%"
bg.style.backgroundSize = "contain"
