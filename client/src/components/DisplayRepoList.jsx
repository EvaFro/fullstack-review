import React from 'react';
import Repo from './Repo.jsx';

const DisplayRepoList = (props) => (
	<div>
		<h4> Top Repos: </h4>
		{(props.repos.length > 0)?
				props.repos.map((repo)=> (
					<Repo repo={repo}/>
					)) : ""
			}
	</div>
)

export default DisplayRepoList;