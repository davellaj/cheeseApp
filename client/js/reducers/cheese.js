import * as actions from '../actions/cheese'

const initialState = {
	cheeses: [],
	loading: false,
	error: null
}

export const ratReducer = (state = initialState, action) => {

	if(action.type === actions.FETCH_CHEESES_REQUEST){
		return {...state, loading: true}
	}

	if(action.type === actions.THE_CHEESE){
		return {...state, loading: false, cheeses: action.cheese, error: null}
	}

	if(action.type === actions.STINKY_CHEESE){
		return {...state, loading: false, error: action.error}
	}

	return state;
}

