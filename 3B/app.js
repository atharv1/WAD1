var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.set('strictQuery',false);
mongoose.connect("mongodb://127.0.0.1:27017/pracDB");

const articleSchema = {
  title:String,
  content:String
}

const Article = mongoose.model("Article",articleSchema);

app.get("/articles",function(req,res){
  Article.find()
  .then((foundArticles)=>{
    res.send(foundArticles);
  })
  .catch(function(err){
    res.send(err);
  });
});

app.post("/articles",function(req,res){
  const newArticle = new Article({
    title:req.body.title,
    content:req.body.content
  });
  newArticle.save()
  .then(()=>{
    res.send("Successfully added a new Article");
  })
  .catch((err)=>{
    res.send(err);
  });
});

app.delete("/articles",function(req,res){
  Article.deleteMany()
  .then(()=>{
    res.send("Successfully deleted all articles");
  })
  .catch((err)=>{
    res.send(err);
  });
});

app.put("/articles/:articleTitle",function(req,res){
  Article.findOneAndUpdate(
    {title:req.params.articleTitle},
    {title:req.body.title, content: req.body.content},
    {overwrite: true }
  )
  .then(()=>{
    res.send("Successfully updated article");
  })
  .catch((err)=>{
    res.send(err);
  });
});

app.listen("8000",function(){
  console.log("Server started at port 8000");
});
