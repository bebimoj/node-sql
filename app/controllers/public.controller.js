exports.getHomepage = (req, res) => {
  res.render('public/index', {
    template: 'home',
    title: 'The easiest way create payment links',
    description: '',
    ogimage: '',
  });
};


// -- AJAX METHODS
exports.getModalSlideUp = (req, res) => {
  const tpl = req.query.tpl;
  if (req.xhr) {
    res.render('public/ajax/modal-up', {
      tpl: tpl,
    });
  } else {
    res.redirect('/not-found');
  }
};



exports.getModalVideo = (req, res) => {
  const tpl = req.query.tpl;
  if (req.xhr) {
    res.render('public/ajax/video', {
      tpl: tpl,
    });
  } else {
    res.redirect('/not-found');
  }
};

exports.getModalListing = (req, res) => {
  const tpl = req.query.tpl;
  const username = req.query.username.replace(/[^A-Z0-9]+/ig, "_");
  if (req.xhr) {
    res.render('public/ajax/start-listing', {
      tpl: tpl,
      username: username
    });
  } else {
    res.redirect('/not-found');
  }
};


exports.getAuthLogin = (req, res) => {
  const tpl = req.query.tpl;
  if (req.xhr) {
    res.render('public/ajax/auth', {
      tpl: tpl,
    });
  } else {
    res.redirect('/not-found');
  }
};
