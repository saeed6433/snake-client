const net = require("net");
const { IP , PORT } = require("./constants")

 const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
  conn.on("connect", () => {
    console.log('Successfully connected to game server')
  });
  conn.on("connect", () => {
    conn.write("Name: SJ")
  });

  // conn.on("connect", () => {
  //   setTimeout(()=>{conn.write("Move: left")},3000) 
  // });
  // conn.on("connect", (data) => {
  //   console.log(data)
  // });
};


module.exports = {connect}