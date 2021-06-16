
const express = require("express");
const mongoose= require('mongoose');
const Exercice = require("./routes/exercice");
const User = require("./routes/user");
const app = express();
const url = 'mongodb://127.0.0.1:27017/dataMern'
const cors = require('cors');
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true })
mongoose.Promise=global.Promise


const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})
app.use(express.static('public'))

app.use(express.json())

app.use('/users', require("./routes/user"))
app.use('/exercices',require("./routes/exercice"))


app.use(function (err,req,res,next){
  res.status(422).send({error:err.message});});

app.listen(4007 ,function(){
console.log('listenning');
});




 
 
    
  