import React from 'react';

const Repo = (props) => (
	<div>
		{props.repo.userName} / {props.repo.repoName}
		<br/>
		Forks {props.repo.forkCount}  Stars {props.repo.starCount}  Watch {props.repo.watchCount} <br/>
		Repo Description: <br/>
		{props.repo.description}
	</div>
)


export default Repo;

