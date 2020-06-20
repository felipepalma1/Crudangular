var request = require("request");

var options = {method: 'GET', url: 'http://localhost/'};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
