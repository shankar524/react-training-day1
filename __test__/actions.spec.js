import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as action from '../src/actions/index';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
describe('Actions Conponent', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('it should fetch data on success', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.at(0);
      request.respondWith({
        status: 200,
        response: 'Happy',
      });
    });
    return store.dispatch(action.getSuperHeroList()).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: 'FETCH_DATA_IN_PROGRESS',
      });
      expect(store.getActions()[1]).toEqual({
        type: 'FETCH_DATA_SUCCESS',
        payload: 'Happy',
      });
    });
  });

  test('it should not fetch data on error', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.at(0);
      request.respondWith({
        status: 500,
        response: 'Bad Request',
      });
    });
    return store.dispatch(action.getSuperHeroList()).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: 'FETCH_DATA_IN_PROGRESS',
      });
      expect(store.getActions()[1]).toEqual({
        type: 'FETCH_DATA_ERROR',
      });
    });
  });
});
