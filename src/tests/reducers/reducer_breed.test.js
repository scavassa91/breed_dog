// Import reducer
import breedReducer from '../../reducers/reducer_breed';
// Import action type
import { GET_ALL_BREEDS } from '../../actions/types';

// Test Breed Reducer
describe('Breed Reducer', () => {
  it('handles action with unknown type', () => {
    // Calls the reducer sending unexpected parameters
    expect(breedReducer(undefined, {})).toEqual({});
  });

  it('GET_ALL_BREEDS', () => {
    const action ={ type: GET_ALL_BREEDS, payload: { "data": {"message": { "poodle": [] } } } };
    // Calls the reducer sending expected parameters
    expect(breedReducer([], action)).toEqual(["poodle"]);
  });
});
