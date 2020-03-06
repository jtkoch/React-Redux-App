import React from 'react';
import BreweryCard from './BreweryCard';

const Breweries = (props) => {
  console.log(props.brewery)
  return (
    <div>
      {props.isFetching ? (<p>Fetching a brewery now :)</p>) : 
      (
    <div>
      {props.brewery.map( (brewery) =>  <BreweryCard key={brewery.id} breweryName={brewery.name} address={brewery.street} />)}
    </div> 
      )}
    </div>
  )
}

export default Breweries;