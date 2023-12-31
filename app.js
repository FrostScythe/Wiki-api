//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = {
  //schema
  title: String,
  content: String,
};

const Article = mongoose.model("Article", articleSchema); //model

//////////////////////////////////Request targeting all articles/////////////////////////////////////////
app
  .route("/articles")

  .get(function (req, res) {
    Article.find({})
      .then((foundArticles) => {
        res.send(foundArticles);
      })
      .catch((error) => {
        res.send(error);
      });
  })

  .post(function (req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    newArticle
      .save({})
      .then(() => {
        res.send("Successfully added a new articles.");
      })
      .catch((error) => {
        res.send(error);
      });
  })

  .delete(function (req, res) {
    Article.deleteMany()
      .then(() => {
        res.send("Successfully deleted all articles.");
      })
      .catch((error) => {
        res.send(error); // Send the error message for debugging (optional)
      });
  });

//////////////////////////////////Request targeting Specific articles/////////////////////////////////////////

app.route("/articles/:articleTitle")

  .get(function (req, res) {
    Article.findOne({ title: req.params.articleTitle }).then((foundArticle) => {
      if (foundArticle) {
        res.send(foundArticle);
      } else {
        res.send("No article was found.");
      }
    });
  })

  .put(function (req, res) {
    Article.updateOne(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content }
    )
      .then(() => {
        res.send("Success!!");
      })
      .catch((error) => {
        res.send(error); // Send the error message for debugging (optional)
      });
  })

  .patch(function(req,res){
    Article.updateOne({title: req.params.articleTitle},{$set :req.body})
    .then(() => {
      res.send("Success!!");
    })
    .catch((error) => {
      res.send(error); 
    });
  })

  .delete(function (req, res) {
    Article.deleteOne({title: req.params.articleTitle})
      .then(() => {
        res.send("Successfully deleted article.");
      })
      .catch((error) => {
        res.send(error); // Send the error message for debugging (optional)
      });
  });

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
