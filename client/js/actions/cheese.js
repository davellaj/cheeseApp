import 'isomorphic-fetch';

export const fetchCheeses = () => dispatch => {
	const url = 'http://localhost:8080/cheeses'
	return fetch(url)
		.then(dispatch(fetchCheesesRequest()))
		.then(response => {
			if(!response.ok) {
				const error = new Error(response.statusText)
				error.response = response
				throw error;
			}
			return response
		})
		.then(response => response.json())
		.then(data => dispatch(fetchCheesesSuccess(data)))
		.catch(error => dispatch(fetchCheeseError(error)))
};

// call theCheese
export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST'
export const fetchCheesesRequest = () => ({
	type: FETCH_CHEESES_REQUEST
})

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS'
export const fetchCheesesSuccess = cheese => ({
	type: FETCH_CHEESES_SUCCESS,
	cheese
})

// call stinkyCheese
export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR'
export const fetchCheesesError = (error) => ({
	type: FETCH_CHEESES_ERROR,
	error
})