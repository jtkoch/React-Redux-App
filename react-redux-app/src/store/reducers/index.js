import { FETCHING_BREWERY_START, FETCHING_BREWERY_SUCCESS, FETCHING_BREWERY_FAILURE } from "../actions";

const initialState = {
  brewery: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BREWERY_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_BREWERY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        brewery: action.payload
      };
    case FETCHING_BREWERY_FAILURE:
      return {
        ...state,
        error: action.payload
      }  
    default:
      return {...state};   
  }
}