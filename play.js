const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("connecting ...");
let connection = connect();

setupInput(connection);