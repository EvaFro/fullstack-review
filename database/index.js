const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  userName: string,
  repoName: string,
  description: string,
  link: string, // might be mixed have to look into it
  forkCount: number,
  watchCount: number,
  starCount: number
});

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