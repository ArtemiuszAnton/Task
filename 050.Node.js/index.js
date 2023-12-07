const express = require('express');
const app = express();

const { profile } = require("console");
const { listenerCount } = require("process");

// 6. Создать обработчик маршрута get с url: "/:id “. Необходимо получить значение id и
// отправить клиенту. (Для того чтобы получить значение из url необходимо
// воспользоваться деструктуризацией из request.params)


app.get('/:id', (req, res) => {
    const obj = { id: 1, "name": "Yesenia", "age": 22 }
   
    const {id} = req.params
    res.send(id)
});

app.get('/about', (req, res) => {
    const email = 'artem122@gmail.com';
    if(/^[\w]+\@[a-z]+\.[a-z]{1,6}/gm.test(email)) res.send(true);
    else res.send(false)
});

app.get('/contact', (req, res) => {
    res.send('contact')
})

app.listen(3000, () => {
    console.log('Server is running');
});


