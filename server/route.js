const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const { uuidv4 } = require('./helper-func/idGenerator')
require('dotenv').config();
const {
    tableTest,
    tablePost,
    tableDelete
  } = require("./DB/queries");
  const pool = require("./DB/index");

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    const DBdata = await pool.query(tableTest());
    res.json(DBdata.rows);
  });
app.post('/comment', async (req, res) => {
    const comment = req.body.comment;
    const date = req.body.date;
    console.log(req.body)
    await pool.query(tablePost(comment, date, uuidv4()))
})
app.get('/delete/:id', async(req, res) => {
    const serial = req.params.id;
    await pool.query(tableDelete(serial))
})


module.exports = app;
const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}!`))