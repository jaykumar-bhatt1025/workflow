const http = require('http');
const app = require('./app');

const port = 3000

let server = http.createServer(app);

server.listen(port, () => {
  console.log(`server Running on ${port}`);
})

