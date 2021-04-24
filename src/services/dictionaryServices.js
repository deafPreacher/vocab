import axios from 'axios';
let BASE_URI = '/words';
/* Uncomment following if you're running locally */
// BASE_URI = 'http://localhost:3001/words'

const getWord = (wordId) => {
	const ENDPOINT = `${BASE_URI}/retrieve/${wordId}`;
	return axios
		.get(ENDPOINT)
		.then(result => result.data);
}

const getAllStored = () => {
	const ENDPOINT = `${BASE_URI}/stored`;
	return axios
		.get(ENDPOINT)
		.then(result => result.data)
}

const getAllStarred = () => {
	const ENDPOINT = `${BASE_URI}/starred`;
	return axios
		.get(ENDPOINT)
		.then(result => result.data);
}

const removeWord = (wordId) => {
	const ENDPOINT = `${BASE_URI}/clear/${wordId}`;
	return axios
		.delete(ENDPOINT)
		.then(result => result.data);
}

const updateWord = (wordId, updates) => {
	const ENDPOINT = `${BASE_URI}/update/${wordId}`;
	return axios
		.put(ENDPOINT, updates)
		.then(result => result.data);
}

export default {
	getWord,
	getAllStored,
	getAllStarred,
	removeWord,
	updateWord
}