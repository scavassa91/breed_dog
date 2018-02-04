import _ from 'lodash';
import { GET_ALL_BREEDS } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_ALL_BREEDS:
      let allBreed = {};
      let subBreed;
      let breed = _.mapValues(action.payload.data.message, (value, key) => {
        if (value.length > 1) {
          subBreed = _.mapKeys(value, (subValue, subKey) => {
            return(key + '-' + subValue);
          });
          subBreed = _.mapValues(subBreed, (subValue, subKey) => {
            return subKey;
          });
          allBreed = Object.assign({}, allBreed, subBreed);
        }
        return key;
      });
      allBreed = Object.assign({}, breed , allBreed);
      allBreed = _(allBreed).toPairs().sortBy(0).fromPairs().value();
      return allBreed;
    default:
      return state;
  }
}
