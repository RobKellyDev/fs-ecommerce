'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const productRoutes = require('./routes/product-route');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', productRoutes.routes);



app.listen(
    config.port, () => 
        console.log(`App listening at 'http://localhost:${config.port}'`)
);
