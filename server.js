const express = require('express');
const cors = require('cors');
const app = express();
const port = 5500;
const memberRoute = require('./app/routes/member.routes');
const majorRoute = require('./app/routes/major.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');
db.sequelize.sync();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/member', memberRoute);
app.use('/api/major', majorRoute);

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));
