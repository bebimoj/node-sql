const express = require('express');
const router = express.Router();

const sqlCtrl = require('../controllers/sql/product.controller')

router.get("/", sqlCtrl.getHomepage)

router.get('/limit', sqlCtrl.getLimit)

router.get("/grouping", sqlCtrl.getGroup)

router.get("/post", sqlCtrl.getPostProduct)
router.post("/post", sqlCtrl.postAddProduct)


router.post("/edit", sqlCtrl.postEditProduct)
router.get("/edit/:prodId", sqlCtrl.getEditProduct)

// delete a product
router.post("/delete", sqlCtrl.postDelete)

// as last 
router.get("/:productId", sqlCtrl.getFindOne)

// find by title
router.get("/:prodTitle", sqlCtrl.getByTitle)


module.exports = router
 