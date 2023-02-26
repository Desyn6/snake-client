const net = require("net");
const connect = function() {
  // Define connection settings
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: SNK');

    // hard-coded move command
    // setInterval(() => {
    //   conn.write('Move: up')
    // }, 50);
  });

  // Define encoding
  conn.setEncoding("utf8");

  // Log all incoming data from server
  conn.on('data', (stream) => console.log(stream));
  
  return conn;
};

console.log("connecting ...");

module.exports = { connect };