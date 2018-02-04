import { GET_RAND_IMG } from '../actions/types';

/**
 * Reducer fucntion to active breed
 * @param {Object} state Current state of the image
 * @param {String} action The action to be executed
 * @return {Object} New state of the image
 */
export default function (state = null, action) {
  switch (action.type) {
    case GET_RAND_IMG:
      // Verify if there is some data into the payload
      if (action.payload.data)
        return action.payload.data.message;
      return state;
    default:
      return state;
  }
}
