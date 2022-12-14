const express = require("express");
const router = express.Router();
const frontCTRL = require("../controllers/front")

// front
router.get("/",frontCTRL.indexGet);

router.get("/como-comprar", frontCTRL.comoComprarGet);

router.get("/contacto", frontCTRL.contactoGet);

router.get("/detalle-producto",frontCTRL.detalleGet);

router.get("/sobre-nosotros",frontCTRL.nosotrosGet);


module.exports = router;