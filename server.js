const express = require('express');
// const helmet = require('helmet')
const { middleware, staticFiles, assets, port} = require('./config/middleware');
// -- REQUIRE ROUTING defaults to index.js
const routes = require('./app/routes');
// -- INIT EXPRESS
const app = express();

// mysql db test
const db = require('./app/util/database')

// -- HELMET
// app.use(helmet({
//   contentSecurityPolicy: false
// }))
// -- BODY PARSER
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// include middleware config
middleware(app);

// -- SERVE STATIC FILES
// -- we can pass '/static/url' as path
app.use('/', express.static(staticFiles));
app.use('/', express.static(assets));

// // -- on application start we can also set a global variable
// app.locals.siteName = 'Shoplr';

// -- ROUTING - figure out loggedInUser

app.use((req, res, next) => {
  req.loggedIn = false
  next()
})

app.use('/', routes({loggedIn: true}));


// create Sequelize tables if they don't exist
db.sync().then(res => {
  const server = app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
  });
}).catch(err => {
  console.log(err);
})

// -- START SERVER

