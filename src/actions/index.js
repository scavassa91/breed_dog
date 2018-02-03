// Library to make the requests
import axios from 'axios';

// Imports types of actions
import { GET_ALL_BREEDS, GET_RAND_IMG } from './types';

// API default URL
const ROOT_URL = 'https://dog.ceo/api';

/**
 * Get all breeds from the server
 * {return} Object Reducer type and request response
 */
export function getAllBreeds () {
  // Make the request using axios
  const request = axios.get(`${ROOT_URL}/breeds/list/all`);

  return {
    type: GET_ALL_BREEDS,
    payload: request
  };
}

/**
 * Get a random dog image from all the breed
 * {return} Object Reducer type and image URL
 */
export function getRandImg () {
  // Make the request using axios
  const request = axios.get(`${ROOT_URL}/breeds/image/random`);

  return {
    type: GET_RAND_IMG,
    payload: request
  }
}
