import api from '../../service/api';

const GET_CATEGORIES_START = 'GET_CATEGORIES_START';
const GET_CATEGORIES_DONE = 'GET_CATEGORIES_DONE';
const GET_CATEGORIES_FAIL = 'GET_CATEGORIES_FAIL';

const initState = {collection: []};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_START:
      return {
        ...state,
        inProgress: true
      };

    case GET_CATEGORIES_DONE:
      return {
        ...state,
        inProgress: false,
        ...action.payload.result
      };

    case GET_CATEGORIES_FAIL:
      return {
        ...state,
        inProgress: false,
        error:      action.payload.error
      };

    default:
      return state;
  }
}

export const getCategories = () => ({
  types:   [GET_CATEGORIES_START, GET_CATEGORIES_DONE, GET_CATEGORIES_FAIL],
  payload: {
    result: api.getCategories()
  }
});