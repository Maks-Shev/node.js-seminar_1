function calculateDiscriminant(a, b, c) {
    return Math.pow(b, 2) - 4 * a * c;
}

const a = 1;
const b = -3;
const c = 2;

const discriminant = calculateDiscriminant(a, b, c);
console.log('Дискриминант: ', discriminant);

/////////////////////////////////////////////////

// Функция возврящает сумму ряда натуральных чисел

function sumOfNumbers(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumOfNumbers(n - 1); // Рекурсивный вызов суммы для n - 1
    }
};

const n = 4;
const sum = sumOfNumbers(n);
console.log('Сумма натуральных чисел до:', n, ":", sum);

/////////////////////////////////////////////////

// Изменить тело функции counter() таким образом, чтобы код вывел максимальное
// количество цифр за одну секунду, при этом выполнение скрипта не должно
// завершаться переполн

function counter(n) {
    console.log(n);
    // counter(n + 1);
    setTimeout(() => counter(n + 1), 1000000);
}

counter(0);

// Приндительно закрываем функцию через 1 секунду

// setTimeout(() => {
//     console.log('Скрипт успешно завершен!');
//     process.exit();  // Почемуто не работает
// }, 1000);

/////////////////////////////////////////////////

const http = require('http');

const server = http.createServer((req, res) =>{
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end('<h1>Главная страница</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end('<h1>Страница обо мне</h1>');   
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end('<h1>Страница не найдена</h1>');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порт ${port}`);
});

// Запускаем сервер в терминале написав node ./seminar.js (указываем название файла, где записан код сервера)