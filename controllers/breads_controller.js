const express = require("express");
const Bread = require("../models/bread");
const breads = express.Router();

// INDEX
breads.get("/", (req, res) => {
  res.render("Index", {
    breads: Bread,
    title: "Veggies Page",
  });
});

// NEW page for new.jsx - needs to go above show
breads.get("/new", (req, res) => {
  res.render("New");
});

// DELETE
breads.delete("/:indexArray", (req, res) => {
  bread.splice(req.params.indexArray, 1);
  res.status(303).redirect("/breads");
});

// EDIT - pass the bread data and the index position to this view. needs to be above the SHOW route
breads.get("/:indexArray/edit", (req, res) => {
  res.render("edit", {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray,
  });
});

// SHOW. another route representing get. query params. bread is an array.
// adding conditional so that, in the case a bread being searched cannot be found, the user will be sent to 404
breads.get("/:arrayIndex", (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render("Show", {
      bread: Bread[req.params.arrayIndex],
      index: req.params.arrayIndex,
    });
  } else {
    res.render("404");
  }
});

// CREATE
breads.post("/", (req, res) => {
  if (!req.body.image) {
    req.body.image =
      "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  }
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread.push(req.body);
  res.redirect("/breads");
});

// UPDATE
breads.put("/:arrayIndex", (req, res) => {
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread[req.params.arrayIndex] = req.body;
  res.redirect(`/breads/${req.params.arrayIndex}`);
});

module.exports = breads;
