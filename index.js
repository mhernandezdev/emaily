const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ bye: 'buddy'})
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// https://frozen-gorge-83511.herokuapp.com/
// https://git.heroku.com/frozen-gorge-83511.herokuapp.git