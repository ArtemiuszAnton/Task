const express = require('express');
const { show, showById, createUser, deleteUser, updateUser } = require('./service');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    const data = show()
    res.send(data)
})

app.post('/user', (req, res) => {
    res.send('post')
})

// 6. Добавить 1 обработчик маршрута: get с url “/:id”. На сервере есть файл сервисов. В
// нем глобально хранится массив объектов. Прописать логику так, чтобы при get
// запросе отправлялся ответ клиенту с объектом, id которого совпадает с
// запрашиваемым id, статус ответа

app.get('/:id', (req, res) => {
    const { id } = req.params
    const int = showById(id)
    res.send(int)
})

// 7. Для post запроса добавить добавление тела запроса в массив и возвращать
// обновленный массив, статус ответа

app.post('/body', (req, res) => {
    const { name, age } = req.body
    const user = createUser(name, age)
    res.send(user)
})

app.delete('/:id', (req, res) => {
    const { id } = req.params
    const del = deleteUser(id)
    res.send(del)
})

app.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const update = updateUser(id, name, age)
    res.send(update)
})

app.listen(3000, () => console.log('server run'));