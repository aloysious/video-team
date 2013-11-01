var Db = require('mongodb').Db,
	Server = require('mongodb').Server,
	mongodb = require('mongodb').MongoClient,
	monk = require('monk'),
	db = monk('localhost:27017/default');

function User(name, sex, number) {
	this.name = name;
	this.sex = sex;
	this.number = number;
}

User.prototype.save = function(callback) {

	var collection = db.get('users');
	var saveUser = {
		name: this.name,
		sex: this.sex,
		number: this.number
	};

	collection.insert(saveUser, {
		save: true
	}, function(err, savedUser) {
		callback(err, savedUser);
	});
};

User.getCount = function(name, callback) {
	var collection = db.get('users');
	
	collection.find({name: name}, {}, function(err, users) {
		callback(err, users.length);
	});
};

module.exports = User;
