const server = require('./spi/server.js');

const port = process.env.PORT || 5000;
server.listen(port, ()=> {
  console.log(`Running on port ${port}`);
});
