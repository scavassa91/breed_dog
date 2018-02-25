import _ from 'lodash';
import { GET_ALL_BREEDS } from '../actions/types';

/**
 * Reducer fucntion to active breed
 * @param {Object} state Current state of all breeds
 * @param {String} action The action to be executed
 * @return {Object} New state of all breeds and sub breeds
 */
export default function (state = {}, action) {
  switch (action.type) {
    case GET_ALL_BREEDS:
      let allBreed = {};
      let subBreed;
      // Verify if there is some data into the payload
      if (action.payload.data) {
        // Save all the main breeds into breed
        let breed = _.mapValues(action.payload.data.message, (value, key) => {
          // Verify if there is some sub breed
          if (value.length > 1) {
            // Save sub breeds into subBreed example "poodle-toy"
            // Also mapping the keys of the Object
            subBreed = _.mapKeys(value, (subValue, subKey) => {
              // Get the breed and concat with the subBreed
              return(key + '-' + subValue);
            });
            // Save the value of the sub breed
            subBreed = _.mapValues(subBreed, (subValue, subKey) => {
              return subKey;
            });
            // concat the main breed into the all breeds Object
            allBreed = Object.assign({}, allBreed, subBreed);
          }
          return key;
        });
        // concat the main breed with sub breeds
        allBreed = Object.assign({}, breed , allBreed);
        // Order by alphabetical order A-Z
        allBreed = _(allBreed).toPairs().sortBy(0).fromPairs().value();
        allBreed = _.values(allBreed);
      }
      return allBreed;
    default:
      return state;
  }
}
