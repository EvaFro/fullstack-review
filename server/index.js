const express = require('express');
const bodyParser = require('body-parser');
let app = express();
const getRepos = require('../helpers/github.js')
const dataBase = require('../helpers/mongoHelper.js')

// parse the data to req.body
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!

  	console.log("req: ", req.body.username)
  	getRepos.getReposByUsername(req.body.username)
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

  	console.log("Fetching Data")
		dataBase.fetch((data)=>{res.send(data)});
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

