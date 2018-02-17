const express = require('express');
const bodyParser = require('body-parser');
let app = express();
const getRepos = require('../helpers/github.js')

// parse the data to req.body
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!

  	console.log("req: ", req.body.username)

  	// need to include an if than statement that makes sure the data 
  	// is not already in the data base === or not



  	getRepos.getReposByUsername(req.body.username)
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

