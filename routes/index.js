var User = require('../models/user');
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.show = function(req, res) {
	var body = req.body,
		name = body.name,
		sex = body.sex,
		number = body.number,
		user = new User(name, sex, number);

	user.save(function(err, savedUser) {
		if (err) {
			console.log(err);
		} else {
			User.getCount(savedUser.name, function(err, count) {
				if (err) {
					console.log(err);
				}

				res.render('show', {
					name: savedUser.name,
					sex: savedUser.sex,
					number: savedUser.number,
					count: count
				});
			});
		}
	});
};
