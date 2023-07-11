const express = require('express');
const router = express.Router();

const sqlCtrl = require('../controllers/sql.controller')

router.get("/", sqlCtrl.getHomepage)
router.get("/find-one", sqlCtrl.getFindOne)
router.get("/grouping", sqlCtrl.getGroup)

router.get("/post", sqlCtrl.getPostProduct)
router.post("/post", sqlCtrl.postAddProduct)

router.get("/edit/:prodId", sqlCtrl.getEditProduct)
router.post("/edit", sqlCtrl.postEditProduct)


module.exports = router
