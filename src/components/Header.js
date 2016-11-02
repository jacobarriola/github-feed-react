import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header>
				<h1>Welcome</h1>
				<p>Please enter a GitHub username to lookup the last 10 GitHub events.</p>
			</header>
		)
	}
};

export default Header;
