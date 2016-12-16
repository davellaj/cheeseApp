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
		.then(data => dispatch(theCheese(data)))
		.catch(error => {
			console.log(error.response)
			dispatch(stinkyCheese(error))
		})
};


export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST'
export const fetchCheesesRequest = () => ({
	type: FETCH_CHEESES_REQUEST
})

export const THE_CHEESE = 'THE_CHEESE'
export const theCheese = cheese => ({
	type: THE_CHEESE,
	cheese
})

// call stinkyCheese
export const STINKY_CHEESE = 'STINKY_CHEESE'
export const stinkyCheese = (error) => ({
	type: STINKY_CHEESE,
	error
})