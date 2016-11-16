import styles from '../index.scss';
import React from 'react';

var RandomPoke = React.createClass({
	render: function() {
		return (
			<div className={styles.pokeContainer}>
				<img className={styles.pokeImage} src={ this.props.sprite } id="pokeImage"></img>
			</div>
		)
	}
})

module.exports = RandomPoke;
