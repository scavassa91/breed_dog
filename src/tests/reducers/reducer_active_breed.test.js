import activeBreedReducer from '../../reducers/reducer_active_breed';
import { BREED_SELECTED } from '../../actions/types';

describe('Active Breed Reducer', () => {
  it('handles action with unknown type', () => {
    expect(activeBreedReducer(undefined, {})).toEqual(null);
  });

  it('BREED_SELECTED', () => {
    const action ={ type: BREED_SELECTED, payload: "poodle" };
    expect(activeBreedReducer({}, action)).toEqual("poodle");
  });
});
