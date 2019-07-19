import listReducer, { initialState } from '../src/reducers/index';

describe('reducer', () => {
  test('FETCH_DATA_SUCCESS should initialize lists', () => {
    const getList = {
      type: 'FETCH_DATA_SUCCESS',
      payload: ['super'],
    };
    expect(listReducer(initialState, getList)).toEqual({ list: ['super'] });
  });
});
