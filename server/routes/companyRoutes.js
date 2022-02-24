const express = require("express");
const router = express.Router();
const {
  getCompanies,
  setCompanies,
  updateCompanies,
} = require("../controller/companyController");
const {
  jnfHandler,
  newJnf,
  updatejnf,
  deletejnf,
} = require("../controller/jnfController");
const {
  infHandler,
  newinf,
  updateinf,
  deleteinf,
} = require("../controller/infController");
const registerValidate = require("../middleWare/registerValidation");

router.get("/:companyId", getCompanies);
router.post("/create", setCompanies);

// //inf handling route
router.get("/:companyId/inf/:infId", infHandler);
router.post("/:companyId/inf", newinf);
router.post("/:companyId/:infId/updateinf", updateinf);
router.delete("/:companyId/:infId/deleteinf", deleteinf);

// //jnf handling route
router.get("/:companyId/jnf/:jnfId", jnfHandler);
router.post("/:companyId/jnf", newJnf);
router.post("/:companyId/:jnfId/updatejnf", updatejnf);
router.delete("/:companyId/:jnfId/deletejnf", deletejnf);

router.put("/:companyId", updateCompanies);

module.exports = router;
