// Library to make the requests
import axios from 'axios';

// Imports types of actions
import { GET_ALL_BREEDS, GET_RAND_IMG, BREED_SELECTED } from './types';

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
export function getRandImg (breed, subBreed) {
  // Make the request using axios
  let request;

  if (breed) {
    if (subBreed) {
      request = axios.get(`${ROOT_URL}/breed/${breed}/${subBreed}/images/random`);
    } else {
    request = axios.get(`${ROOT_URL}/breed/${breed}/images/random`);
    }
  } else {
    request = axios.get(`${ROOT_URL}/breeds/image/random`);
  }

  return {
    type: GET_RAND_IMG,
    payload: request
  }
}

/**
 * Set the active breed
 * {return} Object Reducer type and the breed selected
 */
export function selectBreed (breed) {
  return {
    type: BREED_SELECTED,
    payload: breed
  }
}
