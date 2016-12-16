import 'babel-polyfill';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

import React from 'react'
import ReactDOM from 'react-dom'
import CheeseList from './components/cheese-list';

const exampleCheese = [
	"Bath Blue",
	"Barkham Blue",
	"Buxton Blue"
]
document.addEventListener('DOMContentLoaded', () => {
	return ReactDOM.render(
		<CheeseList cheeses={exampleCheese} />,
		document.getElementById('app')
	);	
});
