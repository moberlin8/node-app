const app = require('express')()

app.get('/', (req, res) => {
  res.send("MattO's test app -- woot");
});
 
module.exports.app = app;
