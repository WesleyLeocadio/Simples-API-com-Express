const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
userRoutes(app)

app.get('/', (req, res)=> res.send('Olá mundo pelo EXPRESS!'))
app.listen(3333);   