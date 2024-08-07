const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hi, I am root");
});

//index
app.get("/users", (req, res) => {
  res.send("GET for users");
});

//show
app.get("/users/:id", (req, res) => {
  res.send("GET for user id");
});

//post
app.post("/users", (req, res) => {
  res.send("POST for users");
});

//delete
app.delete("/users/:id", (req, res) => {
  res.send("DELETE for user id");
});

//POSTS
//index
app.get("/posts", (req, res) => {
  res.send("GET for posts");
});

//show
app.get("/posts/:id", (req, res) => {
  res.send("GET for posts id");
});

//post
app.post("/posts", (req, res) => {
  res.send("POST for posts");
});

//delete
app.delete("/posts/:id", (req, res) => {
  res.send("DELETE for posts id");
});

app.listen(3000, () => {
  console.log("server is listing to 3000");
});
