const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost/fetcher');




let fetch = (query) =>{
	Repo.find(function (err, repos) {
	  if (err) return console.error(err);
	  console.log(repos);
	})
}



module.exports.fetch = fetch;