import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import DisplayRepoList from './components/DisplayRepoList.jsx';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [{userName:'EvaFro',repoName: 'HelloWorld', starCount:'10', watchCount:'100', forkCount:'20', description:'First Repo'}]
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      url: "/repos",
      method: "POST",
      data: JSON.stringify({username: term}),
      dataType: 'json',
      contentType: 'application/json'
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
      <DisplayRepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));