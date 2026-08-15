const express=require('express');
const routes=require("./routes/AartStart");
const path=require('path')
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')
app.use('/', routes);



module.exports=app;  
