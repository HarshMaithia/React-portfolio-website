const dotenv = require('dotenv');
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('client/build'));

app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server is Running on port ${port} .`))