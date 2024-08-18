const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())


app.get('/', (req, res)=>{
    res.send('Help center is active')
})

app.listen(port, ()=>{
    console.log(`Help center is active on port ${port}`)
})