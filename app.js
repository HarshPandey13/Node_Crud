require('dotenv').config();
const express = require('express');
const app = express();
require('./db/conn')
const cors = require('cors');
const router = require('./Routes/router');
const PORT = 5000;


app.use(cors());
app.use(express.json());
app.use(router);

//get response
// app.get("/",(req,res) => {
//     res.status(200).json("Hello Jiii");
// })

//server start
app.listen(PORT,()=>{
    console.log(`server start at Port No : ${PORT}`);
})