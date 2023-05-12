const { Router } = require("express");

const AuthController = require("../controllers/auth.controller");
const isLogin = require("../middlewares/isLogin");

const router = Router();

router.get("/login", isLogin, AuthController.loginPage);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);

module.exports = router;
