import { GET_RAND_IMG } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case GET_RAND_IMG:
      return action.payload.data.message;
    default:
      return state;
  }
}
