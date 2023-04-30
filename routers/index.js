const { Router } = require("express");

const shoeRouter = require("./shoe.router");

const router = Router();

router.get("/", (req, res) => {
  res.render("pages/index");
});

router.use(shoeRouter);

module.exports = router;