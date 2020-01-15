//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Query params: req.query(Filtros, ordenação, paginação, ...) get
//Route params:  req.params(Identificar um recurso na alteração ou remoção) put, delete
//Body: request.body(Dados para criação ou alteração de um registro) post, put

// MongoDB(Não-relacional)

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://nicolas:nicolas@cluster0-4pynr.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use(routes);

app.listen(3333);