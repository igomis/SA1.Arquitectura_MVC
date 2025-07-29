const express = require('express');
const controller = require('./src/controllers/itemController');
const app = express();
app.use(express.json());

app.get('/items', controller.getItems);
app.post('/items', controller.createItem);

app.listen(3000, () => console.log('Servidor MVC actiu al port 3000'));
