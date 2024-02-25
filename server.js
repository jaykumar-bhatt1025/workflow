const http = require('http');
const app = require('./app');
require('dotenv').config()

const port = process.env.PORT || 3000

let server = http.createServer(app);

server.listen(port, () => {
  console.log(`server Running on ${port}`);
})

