import React from 'react';
import moment from 'moment';

class Event extends React.Component {
	render() {
		const {type, created_at, repo} = this.props.item;
		const url = `https://github.com.com/${repo.name}`;

		return (
			<li className="event-card">
				<h2>Repo: <a href={url}>{repo.name}</a></h2>
				<p>{type} - {moment.utc( created_at, "YYYYMMDD" ).fromNow()}</p>
			</li>
		)
	}
};

export default Event;
