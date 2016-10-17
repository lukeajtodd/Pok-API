import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import React from 'react';
import RandomPoke from './components/RandomPoke.jsx';

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

// export default class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { randomName: '', randomSprite: '' }
// 		this.getRandomPoke = this.getRandomPoke.bind(this);
// 	}
// 	componentWillMount() {
// 		this.state = { randomName: this.getRandomPoke() }
// 	}
// 	getRandomPoke() {
// 		let randNo = Math.floor(Math.random() * 700) + 21;
// 		const self = this;

// 		let xhr = new XMLHttpRequest();
// 		xhr.addEventListener('load', function() {
// 			self.state = { randomName: JSON.parse(this.responseText).name.capitalize() };
// 			self.state = { randomSprite: './pokemon-sprites/sprites/pokemon/model/' + randNo + '.png' };
// 		});
// 		xhr.open('GET', 'http://pokeapi.co/api/v2/pokemon/' + randNo);
// 		xhr.send();
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<header>
// 					<h1>PokéAPI!</h1>
// 				</header>
// 				<RandomPoke name={this.state.randomName} sprite={this.state.randomSprite} />
// 			</div>
// 		)
// 	}
// }

const App = React.createClass({
	getInitialState: function() {
		return { randomName: '', randomSprite: '' }
	},
	componentWillMount: function() {
		this.setState({ randomName: this.getRandomPoke() });
	},
	getRandomPoke: function() {
		let randNo = Math.floor(Math.random() * 700) + 21;
		var self = this;

		let xhr = new XMLHttpRequest();
		xhr.addEventListener('load', function() {
			self.setState({ 'randomName': JSON.parse(this.responseText).name.capitalize() });
			self.setState({ randomSprite: './pokemon-sprites/sprites/pokemon/model/' + randNo + '.png' });
		});
		xhr.open('GET', 'http://pokeapi.co/api/v2/pokemon/' + randNo);
		xhr.send();
	},
	render: function() {
		return (
      <div>
      	<header>
        	<h1>PokéAPI!</h1>
        </header>
        <RandomPoke name={this.state.randomName} sprite={this.state.randomSprite} />
      </div>
    )
	}
})

module.exports = App;
