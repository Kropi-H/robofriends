import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundry';
// import { robots } from './robots';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        })
            .then(users => {
                this.setState({ robots: users });
            })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield);
        })
        return !robots.length ?
            (<div className="tc">
                return <h1 className='f1'>Loading</h1>
            </div>) :
            (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>

                    <Searchbox searchChange={this.onSearchChange} />
                    <Scroll>
                    <ErrorBoundry>
                    <CardList robots={filterRobots} />
                    </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default App;