const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())

app.get('/api', async (req,res)=>{
  console.log('hello call')
  return res.status(200).send('Hello from server.')
})

app.get('/api/bye', async(req,res)=> {
  return res.status(200).send('Bye from Server.')
})

module.exports = app;