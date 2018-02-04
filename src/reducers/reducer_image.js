import { GET_RAND_IMG } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case GET_RAND_IMG:
      if (action.payload.data)
        return action.payload.data.message;
      return state;
    default:
      return state;
  }
}
