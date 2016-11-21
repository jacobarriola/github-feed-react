import React from 'react';
import Event from './Event';
import Search from './Search';

class Events extends React.Component {
    constructor(props) {
        super(props);

        this.searchUser = this.searchUser.bind(this);

        this.state = {
            items: []
		}
    }

    // componentWillMount() {
    //     this.loadEvents();
    // }
	//
    // loadEvents() {
	// 	const localStorageUser = localStorage.getItem(`search-jacobarriola`);
    //     if ( localStorageUser ) {
    //         const localUser = JSON.parse(localStorageUser);
    //         this.setState({ items: localUser });
    //         return;
    //     }
    //     fetch(`https://api.github.com/users/jacobarriola/events?per_page=12`)
    //         .then(response => response.json())
    //         .then(items => {
    //             this.setState({ items });
    //             localStorage.setItem(`search-jacobarriola`, JSON.stringify(items));
    //         });
    // }

    searchUser(user) {
        const localStorageUser = localStorage.getItem(`search-${user}`);
        if ( localStorageUser ) {
            const localUser = JSON.parse(localStorageUser);
            this.setState({ items: localUser });
            return;
        }
        fetch(`https://api.github.com/users/${user}/events?per_page=12`)
            .then(response => response.json())
            .then(items => {
                this.setState({ items });
                localStorage.setItem(`search-${user}`, JSON.stringify(items));
            });
    }

    render() {
        return (
            <div>
                <Search searchUser={this.searchUser}/>
                <ul className="events">
                    {this.state.items.map((items, i) => <Event key={this.state.items[i].id} item={this.state.items[i]} />)}
                </ul>
            </div>
        )
    }
};

export default Events;
