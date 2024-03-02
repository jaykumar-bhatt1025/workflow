const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use('/api',require('./apis'))
// app.get("/api", (req,res)=> {
//   console.log('users')
//   return res.send('hello users')
// })
// app.get("/api/products", (req,res)=> {
//   console.log('products')
//   return res.send('hello products')
// })

module.exports = app;