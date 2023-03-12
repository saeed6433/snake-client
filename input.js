let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
};
const handleUserInput = function(key) {
  return (key === '\u0003') ? process.exit()
    : (key === 'w') ? connection.write("Move: up")
      : (key === 'a') ? connection.write("Move: left")
        : (key === 's') ? connection.write("Move: down")
          : (key === 'd') ? connection.write("Move: right")
            : connection.write("Say: Go");

};

module.exports = {setupInput};