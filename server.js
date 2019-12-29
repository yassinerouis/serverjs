var http=require('http');

var handleRequest=function(request,response){
    console.log('Testing kubernetes for url: '+request.url);
    response.writeHead(200);
    response.end('hello IRISI!');
};
var www=http.createServer(handleRequest);
www.listen(8080);