const express = require("express");
const controller = require("../controllers/persona.controller");
const router = express.Router();

router.get("/personas", controller.listPersona);
router.post("/personas/add", controller.createPersona);
router.put("/personas/:id", controller.updatePersona);
router.delete("/personas/:id", controller.destroidPersona);

module.exports = router;