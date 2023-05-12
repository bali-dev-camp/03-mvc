const { Router } = require("express");

const UserController = require("../controllers/user.controller");

const router = Router();

router.get("/user", UserController.listPage);
router.get("/user/create", UserController.createPage);
router.post("/user", UserController.store);
router.get("/user/:id/edit", UserController.editPage);
router.post("/user/:id/edit", UserController.update);
router.post("/user/:id/delete", UserController.delete);

module.exports = router;
