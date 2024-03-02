const route = require('express').Router()

route.get('/hello', async (req,res)=>{
  console.log('hello call')
  return res.status(200).send('Hello from server.')
})

route.get('/bye', async(req,res)=> {
  console.log('Bye call')
  return res.status(200).send('Bye from Server.')
})

module.exports = route