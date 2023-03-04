const {connect} = require("./client.js")

console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // return stdin;
  stdin.on("data", handleUserInput);

};
const handleUserInput = function (key) {
  if (key === '\u0003'){
    process.exit();
  }
};

setupInput()
