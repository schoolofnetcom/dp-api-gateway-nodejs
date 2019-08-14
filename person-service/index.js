const express = require('express');
const mongoose = require('mongoose');

const Model = require('./model');

const app = express();

mongoose.connect('mongodb://localhost:27017/app', { useNewUrlParser: true });

app.get('/people', async(req, res) => {
    const list = await Model.find({});
    return res.json({ list });
});

app.listen(3002, () => console.log('Person service has been started http://localhost:3002'))