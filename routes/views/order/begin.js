var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.tabID = 'order';

	console.log(req.session);
	
	// Render the view
	view.render('order/begin');
};
