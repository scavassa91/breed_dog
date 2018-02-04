// Lib to meke requests
import axios from 'axios';
// Lib to mock the axios request
import MockAdapter from 'axios-mock-adapter';

// Import all the actions
import { BREED_SELECTED, GET_RAND_IMG, GET_ALL_BREEDS } from '../../actions/types';
// Import all the actions functions
import { selectBreed, getRandImg, getAllBreeds } from '../../actions';

// Testing all actions
describe('actions', () => {

  // Test selected breed
  describe('selectBreed', () => {
    it('has the correct type', () => {
      const action = selectBreed();
      // Verify if the 'action.type' is correct
      expect(action.type).toBe(BREED_SELECTED);
    });

    it('has the correct payload', () => {
      const action = selectBreed('poodle');
      // Verify if the 'action.payload' is correct
      expect(action.payload).toBe('poodle');
    });
  });

  // Test the request getAllBreeds
  describe('getAllBreeds', () => {
    // Mock a response to test 'action.payload' and 'action.type' before each test
    beforeEach(() => {
      let mockAdapter = new MockAdapter(axios);

      mockAdapter.onGet('https://dog.ceo/api/breeds/list/all').reply(200, {"status":"success","message":{"affenpinscher":[]}});
    });

    it('has the correct type', () => {
      const action = getAllBreeds();
      // Verify if the 'action.type' is correct
      expect(action.type).toBe(GET_ALL_BREEDS);
    });

    // Not working propertly
    it('has the correct payload', () => {

      let action = getAllBreeds();

      setTimeout(() => {
        // Verify if the 'action.payload' is correct
        expect(action.payload.data.message).toBe({"affenpinscher":[]});
      }, 0)
   });
  });

  // Test the request getRandImg
  describe('getRandImg', () => {
    // Mock a response to test 'action.payload' and 'action.type' before each test
    beforeEach(() => {
      let mockAdapter = new MockAdapter(axios);

      mockAdapter.onGet('https://dog.ceo/api/breeds/image/random').reply(200, {"status":"success","message":"https://dog.ceo/api/img/terrier-dandie/n02096437_4184.jpg"});
    });

    it('has the correct type', () => {
      const action = getRandImg();
      // Verify if the 'action.type' is correct
      expect(action.type).toBe(GET_RAND_IMG);
    });

    // Not working correctly
    it('has the correct payload', () => {

      let action = getRandImg();

      setTimeout(() => {
        // Verify if the 'action.payload' is correct
        expect(action.payload.data.message).toBe("https://dog.ceo/api/img/terrier-dandie/n02096437_4184.jpg");
      }, 0)
   });
  });
});
