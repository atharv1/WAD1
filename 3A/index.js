var express= require('express');

const app = express();

app.use(express.static('public'));

app.get("/",(req,res)=>{
  res.render("index");
});

app.listen("8080",function(){
  console.log("Server started at port 8000");
});
