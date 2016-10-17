import styles from '../index.scss';
import React from 'react';

var RandomPoke = React.createClass({
	render: function() {
		return (
			<div className={styles.pokeContainer}>
				<h2 className={styles.pokeName}>{ this.props.name }</h2>
				<img className={styles.pokeImage} src={ this.props.sprite }></img>
			</div>
		)
	}
})

module.exports = RandomPoke;
