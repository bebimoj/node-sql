const express = require('express');
const router = express.Router();

// not found router
const notFound = require('./notfound.routes');

// public router 
const publicRouter = require('./public.routes')
const sqlRouter = require('./sql.routes')

module.exports = () => {

  // public as last
  router.use('/', sqlRouter)
  // last router to catch all 404's
  router.use('*', notFound)

  return router
}

