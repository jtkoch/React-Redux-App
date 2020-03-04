import React from 'react';
import { connect } from 'react-redux';
import { getBrewery } from '../store/actions';


const Breweries = ({ getBrewery, isFetching, error }) => {
  if (isFetching) {
    return <h2>Fetching a brewery now :)</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h2>Brewery: </h2>
      <p>Type: </p>
      <p>City: </p>
      <p>State: </p>
      <button onClick={getBrewery}>Check out a new brewery</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    brewery: state.brewery,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect ( 
  mapStateToProps,
  { getBrewery }
)(Breweries);