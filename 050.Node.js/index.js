const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const arr = [1, 2, 3, 2, 1, 4, 4, 5, 5, 5, 2, 1, 8]
    const uniq = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniq.includes(arr[i])) uniq.push(arr[i]);
    }
    res.send(uniq);
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

