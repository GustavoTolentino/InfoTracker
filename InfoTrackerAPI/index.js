const express = require('express');
const server = express();
server.listen(0171);
server.use(express.json());
const navegadores = ['Teste1', 'teste2', 'teste3'];

server.get('/navegadores/:index', (req, res) => {
    const { index } = req.params;
    return res.json(navegadores[index]);
});
server.get('/navegadores', (req, res) => {
    return res.json(navegadores);
});
server.post('/navegadores', (req, res) => {
    const {name} = req.body;
    navegadores.push(name);
    return res.json(navegadores);
});
server.put('/navegadores/:index', (req, res) => {
    const {index} = req.params;
    const {name} = req.body;
    navagadores[index] = name;
    return res.json(navegadores);
});
server.delete('/navegadores/:index', (req, res) => {
    const {index} = req.params;
    navegadores.splice(index, 1);
    return res.json({ message: 'O curso foi deletado com Sucesso!' });
})