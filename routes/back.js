var express = require("express");
var router = express.Router();
const backCTRL = require("../controllers/back")


//back
router.get("/admin",backCTRL.adminGet);

router.get("/agregar-producto",backCTRL.agregarGet);

router.get("/editar-producto",backCTRL.editarGet);

router.get("/login",backCTRL.loginGet);

module.exports = router;
