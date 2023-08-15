const Product = require('../../models/product');
const { capitalize } = require('../util/helper');

// find all products
exports.getHomepage = (req, res) => {
  Product.findAll()
    .then((data) => {
      res.render('sql/index', {
        template: 'list',
        title: 'Working with sql in nodejs',
        description: '',
        ogimage: '',
        products: data,
        path: 'home'
      });
    })
    .catch((err) => console.log(err));
};

exports.getLimit = (req, res) => {
  Product.findAll({
    limit: 4
  })
    .then((data) => {
      res.render('sql/index', {
        template: 'list',
        title: 'Working with sql in nodejs',
        description: '',
        ogimage: '',
        products: data,
        path: 'limit'
      });
    })
    .catch((err) => console.log(err));
};

exports.getFindOne = (req, res) => {
  const id = req.params.productId;
  Product.findByPk(id)
    .then((data) => {
      res.render('sql/index', {
        template: 'find-one',
        title: 'Working with sql in nodejs',
        description: '',
        ogimage: '',
        product: data,
        path: ''
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getByTitle = (req, res) => {
  const title = req.params.prodTitle;

  Product.findOne({ where: { title: title } })
    .then((data) => {
      res.render('sql/index', {
        template: 'find-one',
        title: 'Working with sql in nodejs',
        description: '',
        ogimage: '',
        product: data,
        path: ''
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getGroup = (req, res) => {
  res.render('sql/index', {
    template: 'group',
    title: 'Working with sql in nodejs',
    description: '',
    ogimage: '',
    path: 'group'
  });
};

// get post
exports.getPostProduct = (req, res) => {
  res.render('sql/index', {
    template: 'post',
    title: 'Working with sql in nodejs',
    description: '',
    ogimage: '',
    util: {
      capitalize: capitalize,
    },
    editing: false,
    path: 'post'
  });
};

// post post
exports.postAddProduct = (req, res) => {
  const { title, price, description } = req.body;
  Product.create({
    title: title,
    price: price,
    description: description,
  })
    .then((result) => {
      console.log(result.dataValues.id);
      const prodId = result.dataValues.id || '';
      res.redirect(`/${prodId}`);
    })
    .catch((err) => console.log(err));
};

// edit product
exports.getEditProduct = (req, res) => {
  const editMode = req.query.mode;
  const prodId = req.params.prodId;
  if (!editMode || editMode !== 'true') {
    return res.redirect('/post');
  }

  Product.findByPk(prodId)
    .then((data) => {
      if (!data) {
        res.redirect('/');
      }
      res.render('sql/index', {
        template: 'edit',
        title: 'Working with sql in nodejs',
        description: '',
        ogimage: '',
        product: data,
        util: {
          capitalize: capitalize,
        },
        editing: true,
        path: 'post'
      });
    })
    .catch((err) => console.log(err));
};
// post edit
exports.postEditProduct = (req, res) => {
  const { title, price, description, productId } = req.body;
  Product.findByPk(productId)
    .then((data) => {
      if (!data) {
        res.redirect('/');
      }
      // this changes data locally in this function we need to save it
      data.title = title;
      data.price = price;
      data.description = description;

      // this saves the data to database
      // return promise so we can catch it in another then
      return data.save();
    })
    .then((success) => {
      res.redirect(`/${productId}`);
    })
    .catch((err) => console.log(err));
};

// find all products
exports.postDelete = (req, res) => {
  const prodId = req.body.productId;
  if (!prodId) {
    res.redirect('/')
  }
  // Product.destroy({
    
  // })
  Product.findByPk(prodId)
    .then(product => {
      return product.destroy()
    })
    .then(success => {
      if(success){
        res.redirect('/')
      }
    })
    .catch(err => console.log(err))
};
