// DEPENDENCIES
const express = require("express");
const methodOverride = require("method-override");

// CONFIGURATION. require dotenv. passing in port to variable port
require("dotenv").config();
const PORT = process.env.PORT; //layer that separates important information from code
const app = express();

// MIDDLEWARE- should be added above routs in server.js. here we are setting up which view engine we will be using and requiring JSX so we can use it in views
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(methodOverride("_method"));

// ROUTES. Path for / gets default page.
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads!"); //message is showing up in the browser
});

// BREADS. importing breads controller that we created. path does not have anything there.
const breadsController = require("./controllers/breads_controller.js");
app.use("/breads", breadsController);

// 404 Page
app.get("*", (req, res) => {
  res.send("404");
});

// LISTEN
app.listen(PORT, () => {
  console.log("nomming at port", PORT);
});
