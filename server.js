// DEPENDENCIES
const express = require("express");

// CONFIGURATION. require dotenv. passing in port to variable port
require("dotenv").config();
const PORT = process.env.PORT; //layer that separates important information from code
const app = express();

// ROUTES. Path for / gets default page. 
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads!"); //message is showing up in the browser
});

// BREADS. importing breads controller that we created. path does not have anything there. 
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)
  

// LISTEN
app.listen(PORT, () => {
  console.log("nomming at port", PORT);
});
