const mongoose = require('mongoose');
const db = require('../database/index.js')
// const uniqueValidator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost/fetcher');





let fetch = (callback) =>{
	db.Repo.find()
	.sort({forkCount:-1,starCount:-1,watchCount:-1,username:1})
	.limit(25)
	.exec((err, repos)=> {
	  if (err) return handleError(err);
	  callback(repos);
	})
}



module.exports.fetch = fetch;