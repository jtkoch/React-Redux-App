import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getBrewery } from './store/actions';
import Breweries from './components/Breweries';

function App(props) {

  const loadBrewery = () => {
    props.getBrewery();
  }

  console.log("this is my state", props)

  return (
    <div className="App">
      <button onClick={loadBrewery}>Check out a new brewery</button>
      <Breweries isFetching={props.isFetching} brewery={props.brewery} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    brewery: state.brewery,
    isFetching: state.isFetching,
    state: state
  };
};

export default connect ( 
  mapStateToProps,
  { getBrewery }
)(App);
