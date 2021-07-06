import React from 'react';

const BreweryCard = (props) => {
  return (
    <div className="brewery-card">
      <h1>{props.breweryName}</h1>
      <p>Brewery Type: {props.brewery_type}</p>
      <p>Location: {props.city}, {props.state}</p>
    </div>
  )
}

export default BreweryCard;