var http=require('http');
http.createServer(function(req,res){
  fs.readFile('C:\Users\pradeev\Desktop\html\19ITR060_exp4HCL.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

}).listen(8050);

