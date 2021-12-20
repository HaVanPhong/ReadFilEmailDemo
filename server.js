const express= require('express');
const app= express();
const fs= require('fs');

app.set('view engine', 'ejs');
app.set('views', './views')
app.use(express.static('./public'))
app.use(express.json())

app.get('/', async (req, res)=> res.render("home"));
app.get('/input', async(req, res)=> {
  fs.open('./public/files/email.txt', 'r', (err, fileToRead)=>{
    if (!err){
      fs.readFile(fileToRead, {encoding: 'utf-8'}, (err, data)=>{
        if (!err){
          res.json(data);
        }
      })
    }else {
      console.log(err);
    }
  })
})

app.listen(3000, ()=>{
  console.log("runed");
})