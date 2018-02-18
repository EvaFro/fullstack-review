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
      repos: []
    }

  }

  onFetch(data){
    this.setState({
      repos: data
    })
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

  fetch () {
    $.ajax({
      url: "/repos",
      method: "GET",
      dataType: 'json',
      contentType: 'application/json',
      success: (data)=>{this.onFetch(data)},
      error: () => {console.log("Invalid Fetch Requesst")}
    })
  }


  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)} onFetch={this.fetch.bind(this)}/>
      <DisplayRepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));