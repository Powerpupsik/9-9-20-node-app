const express = require('express');
const app = express();

app.get("/", function(request, response){
    //console.log(request);
    response.send('<h1>koer@gmail.com</h1>');
});

app.get("/", function(request, response){
    //console.log(request);
    response.send('<h1></h1>');
});



app.listen(8000, function(){
    console.log("Server is running om port 8000")
});