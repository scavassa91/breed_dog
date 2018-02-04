import { BREED_SELECTED } from '../actions/types';

/**
 * Reducer fucntion to active breed
 * @param {String} state Current state of breed selected
 * @param {String} action The action to be executed
 * @return {String} New selected breed
 */
export default function (state = null, action) {
  switch (action.type) {
    case BREED_SELECTED:
      return action.payload;
    default:
      return state;
  }
}
