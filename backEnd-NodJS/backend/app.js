const express = require('express');
const mongoose = require('mongoose');

const app = express();
// const Thing = require('./models/Things');
// const Things = require('./models/Things');

const Product = require('./models/Products');

mongoose
    .connect(
        'mongodb+srv://cararcel:sBl1VU6awVWVYWVl@cluster0.jkrjplp.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0',
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((e) => console.log('Connexion à MongoDB échouée !', e));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    );
    next();
});

app.post('/api/products', (req, res, next) => {
    delete req.body._id;
    const product = new Product({
        ...req.body,
    });
    product
        .save()
        .then(() => res.status(201).json({ product }))
        .catch((error) => {
            console.error(error);
            res.status(400).json({ error });
        });
});

app.put('/api/products/:id', (req, res, next) => {
    Product.updateOne(
        { _id: req.params.id },
        { ...req.body, _id: req.params.id }
    )
        .then(() => res.status(200).json({ message: 'Objet modifié' }))
        .catch((error) => res.status(400).json({ error }));
});

app.delete('/api/products/:id', (req, res, next) => {
    Product.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch((error) => res.status(400).json({ error }));
});

app.get('/api/products/:id', (req, res, next) => {
    Product.findOne({ _id: req.params.id })
        .then((product) => res.status(200).json({ product }))
        .catch((error) => res.status(400).json({ error }));
});

app.get('/api/products', (req, res, next) => {
    Product.find()
        .then((products) => res.status(200).json({ products }))
        .catch((error) => {
            console.error(error);
            res.status(400).json({ error });
        });
});

module.exports = app;
