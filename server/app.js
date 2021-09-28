const express = require('express');
const cors = require('cors')


const app = express();
app.use(express());
app.use(cors());

app.get('/', (req,res) => {
    res.json({message: "hello"})
})

app.post('/', (req,res) => {
    
    
})


// async function decode(req) {
//     let decoded = await (req => req.json())
//     console.log(req);
// }
module.exports = app;

