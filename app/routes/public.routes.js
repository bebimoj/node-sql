const express = require('express');
const router = express.Router();

const publicCtrl = require('../controllers/public.controller')

router.get("/", publicCtrl.getHomepage)
// // ajax routes
router.get('/xhr/modal-up', publicCtrl.getModalSlideUp)
// router.get('/xhr/video', publicCtrl.getModalVideo)

module.exports = router
