import { BREED_SELECTED } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case BREED_SELECTED:
      console.log(action);
      return action.payload;
    default:
      return state;
  }
}