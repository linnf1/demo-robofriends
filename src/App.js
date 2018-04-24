import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import { robots } from './robots';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''			
		}
	}
	componentDidMount(){
		this.setState({robots: robots});
	}

		onSearchChange = (event) => {
			this.setState({ searchfield: event.target.value })
		}

		render() {

			const filterRobots = this.state.robots.filter(robot => {
				return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})

		return (
			<div className="tc">
			<style>
			@import url('https://fonts.googleapis.com/css?family=Fugaz+One');
			</style> 
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList robots={filterRobots}/>
			</div>
			);
	}
}

export default App;