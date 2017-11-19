import api from '../../service/api';

const GET_PRODUCTS_START = 'GET_PRODUCTS_START';
const GET_PRODUCTS_DONE = 'GET_PRODUCTS_DONE';
const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

const initState = {collection: []};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_START:
      return {
        ...state,
        inProgress: true
      };

    case GET_PRODUCTS_DONE:
      return {
        ...state,
        inProgress: false,
        ...action.payload.result
      };

    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        inProgress: false,
        error:      action.payload.error
      };

    default:
      return state;
  }
}

export const getProducts = (categoryId) => ({
  types:   [GET_PRODUCTS_START, GET_PRODUCTS_DONE, GET_PRODUCTS_FAIL],
  payload: {
    result: api.getProducts(categoryId)
  }
});