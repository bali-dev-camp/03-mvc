const { Router } = require("express");
const ShoeController = require("../controllers/shoe.controller");
const ShoeApiController = require("../controllers/shoeApi.controller");

const router = Router();

router.get("/shoe", ShoeController.listPage);
router.get("/shoe/create", ShoeController.createPage);
router.post("/shoe", ShoeController.store);
router.get("/shoe/:id", ShoeController.detailPage);
router.get("/shoe/:id/edit", ShoeController.editPage);
router.post("/shoe/:id/edit", ShoeController.update);
router.post("/shoe/:id/delete", ShoeController.delete);

router.get("/about", ShoeController.aboutPage);

router.get("/api/shoe", ShoeApiController.getShoe);
router.get("/api/shoe/:id", ShoeApiController.getDetailShoe);
router.post("/api/shoe", ShoeApiController.addShoe);
router.put("/api/shoe/:id", ShoeApiController.editShoe);
router.delete("/api/shoe/:id", ShoeApiController.deleteShoe);

module.exports = router;
