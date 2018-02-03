// Library to make the requests
import axios from 'axios';

// Imports types of actions
import { GET_ALL_BREEDS } from './types';

// API default URL
const ROOT_URL = 'https://dog.ceo/api';

/**
 * Get all breeds from the server
 * {return} Object reducer type and request response
 */
export default function getAllBreeds () {
  // Make the request using axios
  const request = axios.get(`${ROOT_URL}/breeds/list/all`);

  return {
    type: GET_ALL_BREEDS,
    payload: request
  };
}
