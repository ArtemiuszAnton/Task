const express = require('express');
const { getAllData, getId, createNewData, updateById, deleteById } = require('./service');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
    try {
        const data = getAllData();
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
});

app.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const get = getId(id);
        res.status(200).send(get)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

app.post('/', (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const post = createNewData(label, category, priority);
        res.status(200).send(post)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

app.put('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { label, category, priority } = req.body;
        const update = updateById(id, label, category, priority);
        res.status(200).send(update)
    } catch (error) {
        res.status(404).send(error.message)

    }
});

app.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const del = deleteById(id);
        res.status(200).send(del)
    } catch (error) {
        res.status(404).send(error.message)

    }
})

app.listen(3000, () => {
    console.log('server is run');
})

