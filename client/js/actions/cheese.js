import 'isomorphic-fetch';

export const fetchCheeses = () => dispatch => {
	const url = 'http://localhost:8080/cheeses'
	return fetch(url)
		.then(response => {
			if(!response.ok) {
				const error = new Error(response.statusText)
				error.response = response
				throw error;
			}
			return response
		})
		.then(response => response.json())
		.then(data => dispatch(theCheese(data))
		)
		.catch(error => dispatch(stinkyCheese(error)))
};

export const THE_CHEESE = 'THE_CHEESE'
export const theCheese = cheese => ({
	type: THE_CHEESE
	cheese
})

// export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS'
// export const fetchCheesesSuccess = () => ({
// 	type: FETCH_CHEESES_SUCCESS
// })

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR'
export const stinkyCheese = (error) => ({
	type: FETCH_CHEESES_ERROR
	error
})