const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())

app.get('/', async (req,res)=>{
  console.log('hello call')
  return res.status(200).send('Hello from server.')
})

module.exports = app;