const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/twitter' , (req , res)=>{
    res.send('harshDotCom')

})

app.get('/login' , (req,res)=>{
    res.send('<h1>pls login at chai aur code</h1> ')
})

app.get("/youtube" , (req,res)=>{
      res.send("<h2>Chai or Code </h2>")
})

app.listen(process.env.PORT , ()=>{
    console.log(`Example app listening on port ${port}`)
})


console.log("Chai Aur Code");