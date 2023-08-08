import { combineReducers } from 'redux';
const UPDATE_SIGNUP = 'UPDATE_SIGNUP';
const UPDATE_MORE_INFO = 'UPDATE_MORE_INFO';

type signUpProps = {
	name: string,
	email: string,
	password: string
};

type moreInfoProps = {
	color: string,
	terms: boolean
};

export function updateSignUp(signUpInfo: signUpProps) {
	return {
		type: 'UPDATE_SIGNUP',
		signUpInfo
	}
}

export function updateMoreInfo(moreInfo: moreInfoProps) {
	return {
		type: 'UPDATE_MORE_INFO',
		moreInfo
	}
}

const defaultStore = {
	signUp: {
		name: '',
	    email: '',
	    password: '',
	},
	moreInfo: {
	    color: '',
	    terms: false
	}
};

function store(state=defaultStore, action) {
	switch (action.type) {
		case UPDATE_SIGNUP:
			return {
				...state,
				signUp: {...action.signUpInfo}
			}
		case UPDATE_MORE_INFO:
			return {
				...state,
				moreInfo: {...action.moreInfo}
			}
		default:
			return state;
	}
}

export default store;