const {connect} = require("./client.js")
const {setupInput} = require("./input")

console.log("Connecting ...");
let obj = connect();
setupInput(obj)
