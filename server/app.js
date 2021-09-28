const express = require('express');
const cors = require('cors')

const app = express();
app.use(express());
app.use(cors());

app.get('/', (req,res) => {
    res.json({message: "hello"})
})


module.exports = app;
