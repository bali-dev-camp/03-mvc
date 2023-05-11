const { Router } = require("express");

const shoeRouter = require("./shoe.router");
const userRouter = require("./user.router");
const authRouter = require("./auth.router");

const router = Router();

router.get("/", (req, res) => {
  res.render("pages/index");
});

router.get("/about", (req, res) => {
  res.render("pages/about");
});

router.use(shoeRouter);
router.use(userRouter);
router.use(authRouter);

module.exports = router;
