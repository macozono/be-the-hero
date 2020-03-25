const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

// Configuração de CORS
app.use(cors());

// informa ao express o tipo de content-type em uso.
app.use(express.json());
app.use(routes);

app.listen(3333);