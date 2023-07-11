const Product = require('../models/product');
const { capitalize } = require('../util/helper');

exports.getHomepage = (req, res) => {
  res.render('sql/index', {
    template: 'home',
    title: 'Working with sql in nodejs',
    description: '',
    ogimage: '',
    products: [],
  });
};

exports.getFindOne = (req, res) => {
  res.render('sql/index', {
    template: 'find-one',
    title: 'Working with sql in nodejs',
    description: '',
    ogimage: '',
    product: false,
  });
};

exports.getGroup = (req, res) => {
  res.render('sql/index', {
    template: 'group',
    title: 'Working with sql in nodejs',
    description: '',
    ogimage: '',
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
      res.redirect('/post');
    })
    .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res) => {
  const editMode = req.query.mode;
  const prodId = req.params.prodId;
  if (!editMode || editMode !== 'true') {
    return res.redirect('/post');
  }

  console.log(editMode);
  console.log(prodId);
  res.render('sql/index', {
    template: 'edit',
    title: 'Working with sql in nodejs',
    description: '',
    ogimage: '',
    util: {
      capitalize: capitalize,
    },
    editing: false,
  });
};
// post edit
exports.postEditProduct = (req, res) => {
  exports.postPost = (req, res) => {
    console.log(res.body);
    res.redirect('/edit');
  };
};
