const { IP, PORT, ENCODING, USERNAME } = require('./constants');

const net = require("net");
const connect = function() {
  // Define connection settings
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write(`Name: ${USERNAME}`);
  });

  // Define encoding
  conn.setEncoding(ENCODING);

  // Log all incoming data from server
  conn.on('data', (stream) => console.log(stream));
  
  return conn;
};

module.exports = { connect };