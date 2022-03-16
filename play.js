const {connect} = require('./client')
const {setupInput} = require('./input')
const {IP, PORT, name} = require('./constants')

console.log('Connecting ...');
let x = connect(IP, PORT, name);

setupInput(x);