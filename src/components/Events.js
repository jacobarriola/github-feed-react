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

    componentWillMount() {
        this.loadEvents();
    }

    loadEvents() {
        fetch(`https://api.github.com/users/jacobarriola/events?per_page=10`)
            .then(response => response.json())
            .then(items => {
                this.setState({ items });
        });
    }

    searchUser(user) {
        fetch(`https://api.github.com/users/${user}/events?per_page=10`)
            .then(response => response.json())
            .then(items => {
                this.setState({ items })
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
