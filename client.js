const net = require("net");

 const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //return conn;
  conn.on("connect", () => {
    console.log('connected')
  });
  conn.on("data", (data) => {
    console.log(data)
  });
};


module.exports = {connect}