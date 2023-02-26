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
  const directions = {
    '\u0077': 'Move: up',
    '\u0061': 'Move: left',
    '\u0073': 'Move: down',
    '\u0064': 'Move: right'
  };

  // send directions using key in object
  connection.write(directions[key]);
};

module.exports = { setupInput };
