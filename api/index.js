const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer =require('nodemailer');


const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');

mongoose.connect('mongodb+srv://javediqbal8381:vu2icWAqbQjpizlZ@cluster0.tajylot.mongodb.net/',{
    useNewUrlparser:true,
    useUnifiedTopology:true
}).then(()=>console.log('mongodb connected')).catch((err)=>console.log(err));

app.listen(port,()=>{
    console.log('server is running on port 8000')
})
