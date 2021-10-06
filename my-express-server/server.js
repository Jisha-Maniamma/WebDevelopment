const express=require("express");
const app=express();


app.get("/",function(request,response){
response.send("<h1>hello, Jisha</h1>");
});
app.get("/contact",function(request,response){
  response.send("<h1>contact me at Juntos.com</h1>");
});
app.get("/about",function(request,response){
  response.send("<p> hai thi sis Jisha Maniamma working in Japan. My home country is india. I love India and Japan.</p>");
});
app.get("/hobbies",function(request,response){
  response.send("<p> Painiting.</p>");
});
app.listen(3000,function(){
  console.log("server started on port 3000");
});
