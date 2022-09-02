const express = require("express");
const { Router } = express;
const router = Router();
const dataProd = require("../db/dataProd");
//const Actions = require("../Controller/controller");
//const MessagesActions = require("../Controller/msgController");

// return all products
router.get("/", (req, res) => {
  res.render("index", { datos: dataProd });
});

router.post("/", (req, res) => {
  const {title, price, thumbnail} = req.body;
  dataProd.push({price:100, title:"hola", thumbnail:"nada"})
  res.redirect("/");
})



module.exports = router;