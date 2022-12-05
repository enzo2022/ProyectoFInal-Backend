var { Router } = require("express");
var router = Router();

const {
  deleteUser,
  restoreUser,
  acces,
  userDates,
} = require("../controllers/controller_admin");

router.put("/restoreUser/:id", restoreUser);
router.put("/deleteUser/:id", deleteUser);
router.put("/acces/:id", acces);
router.get("/userDates/", userDates);
module.exports = router;
