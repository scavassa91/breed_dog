import breedReducer from '../../reducers/reducer_breed';
import { GET_ALL_BREEDS } from '../../actions/types';

describe('Breed Reducer', () => {
  it('handles action with unknown type', () => {
    expect(breedReducer(undefined, {})).toEqual({});
  });

  it('GET_ALL_BREEDS', () => {
    const action ={ type: GET_ALL_BREEDS, payload: { "data": {"message": { "poodle": [] } } } };
    expect(breedReducer({}, action)).toEqual({"poodle": "poodle"});
  });
});
