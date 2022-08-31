
const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/json'});
  if (req.url === "/Vegetables"){
    fs.readFile('result.json', "utf-8",function(err, data){
      res.end(data)
    })
  }


  })
    server.listen(8000,()=>{
      console.log("server started")
    })
