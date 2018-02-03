import _ from 'lodash';
import { GET_ALL_BREEDS } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_ALL_BREEDS:
      return(_.mapValues(action.payload.data.message, (value, key) => {
        return key;
      }));
    default:
      return state;
  }
}
