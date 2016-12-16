import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {ratReducer} from './reducers/cheese';
import CheeseList from './components/cheese-list';

console.log(`Client running in ${process.env.NODE_ENV} mode`);
const store = createStore(ratReducer, applyMiddleware(thunk));

// const exampleCheese = [
// 	"Bath Blue",
// 	"Barkham Blue",
// 	"Buxton Blue"
// ]


document.addEventListener('DOMContentLoaded', () => {
	return ReactDOM.render(
		<Provider store={store}>
			<CheeseList />
		</Provider>,
		document.getElementById('app')
	);	
});


