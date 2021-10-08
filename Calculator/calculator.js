const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(request,response){
  // response.send("<h1>Hello World</h1>");
  response.sendFile(__dirname+"/index.html");
});
app.post("/",function(request,response){
  // response.send("<h1>Hello World</h1>");
  var add=Number(request.body.num1)+Number(request.body.num2);
response.send("<h1>Hello World </h1> "+add);
console.log();
});

app.listen(3000,function(){
  console.log("running on 3000");
});
