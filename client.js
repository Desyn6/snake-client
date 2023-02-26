const net = require("net");
const connect = function() {
  // Define connection settings
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // Define encoding
  conn.setEncoding("utf8");

  // Log all incoming data from server
  conn.on('data', (stream) => console.log(stream));
  
  return conn;
};

console.log("connecting ...");

module.exports = { connect };