require('dotenv').config()
const express = require('express');
const app = express();

const port = 4000;

app.get('/', (req, res) => {
    res.send("hello world")
})
app.get('/nabin',(req, res)=>{
    res.send("navigated to /nabin function ")
})

app.get('/login', (req,res)=>{
    res.send("login page")
})

app.listen(process.env.PORT, () => {
    console.log(`listening to port ${process.env.PORT}`);
})