import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import Scroll from './Scroll';
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''			
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users}));
	}

		onSearchChange = (event) => {
			this.setState({ searchfield: event.target.value })
		}

		render() {

			const filterRobots = this.state.robots.filter(robot => {
				return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})
			if (this.state.robots.length === 0) {
				return <h1>Loading..</h1>
			}else{
			return (
				<div className="tc">
				<style>
				@import url('https://fonts.googleapis.com/css?family=Fugaz+One');
				</style> 
				<h1 className='f2'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filterRobots}/>
				</Scroll>
				</div>
				);
	}
	}
}

export default App;