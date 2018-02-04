// Import reducer
import imageReducer from '../../reducers/reducer_image';
// Import action type
import { GET_RAND_IMG } from '../../actions/types';

// Test Image Reducer
describe('Image Reducer', () => {
  it('handles action with unknown type', () => {
    // Calls the reducer sending unexpected parameters
    expect(imageReducer(undefined, {})).toEqual(null);
  });

  it('GET_RAND_IMG', () => {
    const action = { type: GET_RAND_IMG, payload: { "data": { "message":"https://dog.ceo/api/img/collie-border/n02106166_204.jpg" } } };
    // Calls the reducer sending expected parameters
    expect(imageReducer({}, action)).toEqual("https://dog.ceo/api/img/collie-border/n02106166_204.jpg");
  });
});
