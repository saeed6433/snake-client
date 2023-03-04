const net = require("net");
const { IP , PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;

  // To check if connection works
  // conn.on("connect", () => {
  //   console.log('Successfully connected to game server')
  // });

  //Tp send initials to the server
  // conn.on("connect", () => {
  //   conn.write("Name: SJ")
  // });

  // to check the code with setTimout
  // conn.on("connect", () => {
  //   setTimeout(()=>{conn.write("Move: left")},3000)
  // });

};


module.exports = {connect};