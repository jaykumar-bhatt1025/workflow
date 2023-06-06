const express = require('express');
const app = express();

app.get('/', async (req,res)=>{
  console.log('hello call')
  return res.status(200).send('Hello from server.')
})

module.exports = app;