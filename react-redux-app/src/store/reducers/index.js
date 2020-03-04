import { FETCHING_BREWERY_START, FETCHING_BREWERY_SUCCESS } from "../actions";

const initialState = {
  brewery: null,
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
    default:
      return state;   
  }
}