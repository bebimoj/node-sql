const express = require('express');

const router = express.Router();
router.get('*', (req, res) => {
  const ref = req.header('Referer') || '/'
  res.status(404).render('notfound/index', {
    title: 'The page you are looking for does not exist.',
    ref: ref
  });
});
module.exports = router;