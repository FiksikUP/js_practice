"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы ужу посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let count = 0;

while (count < personalMovieDB.count) {
    let a = prompt('Один из просмотренных фильмов?', ''),
        b = prompt('Насколько оцените его?', '');

    if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('ok');
        count++;
    } else {
        console.log('error');
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30){
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);