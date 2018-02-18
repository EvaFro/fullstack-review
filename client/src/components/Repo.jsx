import React from 'react';

const Repo = (props) => (
	<div>
		-----------------------------------------------------  <br/>
		{props.repo.userName} / {props.repo.repoName} <br/>
		----------------------------------------------------- <br/>
		Forks {props.repo.forkCount}  Stars {props.repo.starCount}  Watch {props.repo.watchCount} <br/>
		Repo Description: <br/>
		{props.repo.description}<br/>
		-----------------------------------------------------
	</div>
)


export default Repo;

