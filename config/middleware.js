const path = require('path');

const { views, staticFiles, assets, isDev, isProd, port} = {
  views: path.join(__dirname, '../app/views'),
  staticFiles: path.join(__dirname, '../app/static'),
  assets: path.join(__dirname, '../app/assets'),
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 4200,
};

const middleware = (app) => {
  if (isProd) {
    // speed up the app in production
    app.use(compression());
  }
  // -- SET TEMPLATE ENGINE
  app.set('view engine', 'ejs');
  // -- SET VIEWS FOLDER / PATH
  app.set('views', views);

  if (isDev) {
    // app.use(morgan('dev'));
  }
};

module.exports = { middleware, staticFiles, assets, port, port };
