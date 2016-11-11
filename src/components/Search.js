import React from 'react';

class Search extends React.Component {
    handleSubmit(e) {
        e.preventDefault();

	    // get the data from the input
        const user = this.refs.q.value;
        this.props.searchUser(user);

    }
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)} className="search-form">
                <input
                    type="text"
                    placeholder="Search via a username..."
                    ref="q" />
                <input
	                type="submit"
	                value="Search"
	                className="button" />
            </form>
        )
    }
};

export default Search;
