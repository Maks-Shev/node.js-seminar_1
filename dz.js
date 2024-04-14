const http = require('http');

let homeCount = 0;
let aboutCount = 0;

const server = http.createServer((req, res) =>{
    if (req.url === '/') {
        homeCount++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end(`<h1>Главная страница</h1><br><p>Просмотров: ${homeCount}</p><br><a href="/about">Ссылка на страницу /about</a>`);
    } else if (req.url === '/about') {
        aboutCount++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end(`<h1>Страница обо мне</h1><br><p>Просмотров: ${aboutCount}</p><br><a href="/">Ссылка на страницу /</a>`);   
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