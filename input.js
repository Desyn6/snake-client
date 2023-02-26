const { connect } = require("http2");

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // exit command
  if (key === '\u0003') process.exit();

  // store direction string in object
  const commands = {
    '\u0077': 'Move: up',     //w key
    '\u0061': 'Move: left',   //a key
    '\u0073': 'Move: down',   //s key
    '\u0064': 'Move: right',  //d key
    '\u0071': 'Say: Hi!',     //q key
    '\u0065': 'Say: Bye!',    //e key
    '\u0072': 'Say: Gotcha!', //r key
  };

  // only process command if input key is recognized
  if (Object.keys(commands).includes(key)) {
    // send directions using key in object
    connection.write(commands[key]);
  }
};

module.exports = { setupInput };
