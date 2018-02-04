// Import reducer
import activeBreedReducer from '../../reducers/reducer_active_breed';
// Import action type
import { BREED_SELECTED } from '../../actions/types';

// Test Active Breed Reducer
describe('Active Breed Reducer', () => {
  it('handles action with unknown type', () => {
    // Calls the reducer sending unexpected parameters
    expect(activeBreedReducer(undefined, {})).toEqual(null);
  });

  it('BREED_SELECTED', () => {
    const action ={ type: BREED_SELECTED, payload: "poodle" };
    // Calls the reducer sending expected parameters
    expect(activeBreedReducer({}, action)).toEqual("poodle");
  });
});
