const { Router } = require("express");
const multer = require("multer");
const mime = require("mime-types");
const path = require("path");

const multerStorageData = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}.${mime.extension(file.mimetype)}`
    );
  },
});

const upload = multer({ storage: multerStorageData });
const ShoeController = require("../controllers/shoe.controller");
const ShoeApiController = require("../controllers/shoeApi.controller");

const router = Router();

router.get("/shoe", ShoeController.listPage);
router.get("/shoe/create", ShoeController.createPage);
router.post("/shoe", upload.single("img"), ShoeController.store);
router.get("/shoe/:id", ShoeController.detailPage);
router.get("/shoe/:id/edit", ShoeController.editPage);
router.post("/shoe/:id/edit", upload.single("img"), ShoeController.update);
router.post("/shoe/:id/delete", ShoeController.delete);

router.get("/about", ShoeController.aboutPage);

router.get("/api/shoe", ShoeApiController.getShoe);
router.get("/api/shoe/:id", ShoeApiController.getDetailShoe);
router.post("/api/shoe", ShoeApiController.addShoe);
router.put("/api/shoe/:id", ShoeApiController.editShoe);
router.delete("/api/shoe/:id", ShoeApiController.deleteShoe);

module.exports = router;
