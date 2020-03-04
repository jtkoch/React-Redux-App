import axios from "axios";

export const FETCHING_BREWERY_START = "FETCHING_BREWERY_START";
export const FETCHING_BREWERY_SUCCESS = "FETCHING_BREWERY_SUCCESS";
export const FETCHING_BREWERY_FAILURE = "FETCHING_BREWERY_FAILURE";

export const getBrewery = () => dispatch => {
  dispatch({ type: FETCHING_BREWERY_START });

  axios 
    .get("https://api.openbrewerydb.org/breweries")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCHING_BREWERY_SUCCESS, payload: res.data.data });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_BREWERY_FAILURE,
        payload: err.response });
  });
}