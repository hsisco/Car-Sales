import React from 'react';

const AdditionalFeature = props => {

  const handleAdd = () => {
    props.addFeature(props.feature);
  }

  return (
    <li>
      <button 
      className="button"
      onClick={handleAdd}>+</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
