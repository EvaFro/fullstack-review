const request = require('request');
const config = require('../config.js');
const save2DataBase = require('../database/index.js')

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options, (err, res, repos)=>{
    if(err){
      console.log("Error API call: ", err);
    } else {
      console.log("Successful API call");
      repos = JSON.parse(repos);
      for(var i=0; i<repos.length;i++){
        save2DataBase.save(repos[i]);
      }
    }
  });

}

module.exports.getReposByUsername = getReposByUsername;