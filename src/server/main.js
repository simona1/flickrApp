require('babel-register');

const app = require('./app').default;

let port = process.env.PORT || 7700;

app.listen(port);
