var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('This is my aws cloud channel hello doston welcom to my channel suwagat h aap sab ka mere channel me'); //write a response to the client
  res.end(); //end the response
}).listen(4000); //the server object listens on port 4000
