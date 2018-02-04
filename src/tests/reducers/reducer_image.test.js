import imageReducer from '../../reducers/reducer_image';
import { GET_RAND_IMG } from '../../actions/types';

describe('Image Reducer', () => {
  it('handles action with unknown type', () => {
    expect(imageReducer(undefined, {})).toEqual(null);
  });

  it('GET_RAND_IMG', () => {
    const action = { type: GET_RAND_IMG, payload: { "data": { "message":"https://dog.ceo/api/img/collie-border/n02106166_204.jpg" } } };
    console.log('12341234');
    expect(imageReducer({}, action)).toEqual("https://dog.ceo/api/img/collie-border/n02106166_204.jpg");
  });
});
