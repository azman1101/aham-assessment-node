require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

// routes
const openRoute_lists = require('./routes/open');

// middlewares
app.use(cors());

// for parsing application/json
app.use(bodyParser.json());

// Registering API
app.use('/', openRoute_lists);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

module.exports = app;
