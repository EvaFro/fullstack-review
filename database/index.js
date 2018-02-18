const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  userName: { type: String, required: true },
  repoName: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  link: { type: String, required: true }, // might be mixed have to look into it
  forkCount: { type: Number, required: true },
  watchCount: { type: Number, required: true },
  starCount: { type: Number, required: true }
});

// repoSchema.plugin(uniqueValidator);

// Need to figure out how to create a unique table - you add the table name 
// to one part of the mongoose 
// compous comunity 


let Repo = mongoose.model('Repo', repoSchema);

let save = (incomingRepo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var userRepo = new Repo({
	  userName: incomingRepo.owner.login,
	  repoName: incomingRepo.name,
	  description: incomingRepo.description,
	  link: incomingRepo.html_url, // might be mixed have to look into it
	  forkCount: incomingRepo.forks_count,
	  watchCount: incomingRepo.watchers_count,
	  starCount: incomingRepo.stargazers_count
  });

  userRepo.save(function (err, userRepo) {
    if (err) return console.error(err);
  });

}

module.exports.save = save;
module.exports.Repo = Repo;