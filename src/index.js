const express = require('express');
const axios = require('axios');

const app = express();
const port = 5500;

app.get('/characters', (req, res) => {
  axios
    .get('https://rickandmortyapi.com/api/character')
    .then(response => {
      const characters = response.data.results;
      res.json(characters);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Erro ao buscar personagens' });
    });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
