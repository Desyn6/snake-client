const {
  UPKEY,
  LEFTKEY,
  DOWNKEY,
  RIGHTKEY,
  MSG1,
  MSG1KEY,
  MSG2,
  MSG2KEY,
  MSG3,
  MSG3KEY
} = require('./constants');

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
    [UPKEY]: 'Move: up',
    [LEFTKEY]: 'Move: left',
    [DOWNKEY]: 'Move: down',
    [RIGHTKEY]: 'Move: right',
    [MSG1KEY]: `Say: ${MSG1}`,
    [MSG2KEY]: `Say: ${MSG2}`,
    [MSG3KEY]: `Say: ${MSG3}`,
  };

  // only process command if input key is recognized
  if (Object.keys(commands).includes(key)) {
    // send directions using key in object
    connection.write(commands[key]);
  }
};

module.exports = { setupInput };
