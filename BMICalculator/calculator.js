const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(request, response) {
  // response.send("<h1>Hello World</h1>");
  response.sendFile(__dirname + "/index.html");
});
app.post("/bmicalculator", function(request, response) {
  // response.send("<h1>Hello World</h1>");
  var weight = parseFloat(request.body.weight);
  var height = parseFloat(request.body.height);
  var calc = weight / Math.pow(height, 2);
  var interpretation;
  if (calc > 24.9)
    interpretation = "Your BMI is " + calc + " ,so you are overweight";
  else if (calc >= 18.5 && calc <= 24.9)
    interpretation = "Your BMI is " + calc + " ,so you are normal weight";
  else
    interpretation = "Your BMI is " + calc + " ,so you are underweight";
  response.send(interpretation);
  console.log();
});




app.listen(3000, function() {
  console.log("serverstarted at 3000");
});
