import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import CheeseList from './components/cheese-list';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import ratReducer from './reducers/cheese';

console.log(`Client running in ${process.env.NODE_ENV} mode`);
createStore(ratReducer, applyMiddleware(thunk));

// const exampleCheese = [
// 	"Bath Blue",
// 	"Barkham Blue",
// 	"Buxton Blue"
// ]


document.addEventListener('DOMContentLoaded', () => {
	return ReactDOM.render(
		<CheeseList cheeses={exampleCheese} />,
		document.getElementById('app')
	);	
});
