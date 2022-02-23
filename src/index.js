const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const timeago = require("timeago.js");


app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'/public')))
// ? middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// *** Routers
app.use('/',require("./routers/router"))

app.listen(app.get("port"),(req,res)=>{
    
    console.log("estas conectado en el puerto ", app.get('port'));
})