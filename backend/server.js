console.clear();
//Imports
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const config = require('./config')
const routes = require('./routes/routes');

const app = express();

//MIddle wears
app.use(bodyparser.json());


// Routes
app.use('/todos', routes);

app.use('/', (req, res) => {
    res.json({ msg: "Wow" });
})

// Start the server
app.listen(config.port, config.host, () => {
    console.log(" \x1b[32m ", `Server is running on ${config.host}:${config.port} `);
    console.log("-".repeat(100));
});
