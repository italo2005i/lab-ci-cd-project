const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./src/routes/users');

const app = express();
app.use(bodyParser.json());
app.use('/api/users', usersRouter);

app.get('/', (req, res) => res.json({msg: 'API activa'}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server en puerto ${PORT}`));

module.exports = app; // para tests
