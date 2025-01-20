const express = require('express');
const app = express();
const port = 3000;

// Определение маршрута для GET запроса
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
