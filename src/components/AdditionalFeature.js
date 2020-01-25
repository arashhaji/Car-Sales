import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/carActions';

const AdditionalFeature = props => {
  const addFeature = () => {
    console.log('add feature: ' + props.feature.name)
    props.addFeature(props.feature);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      {/* <button className="button">Add</button> */}
      <button className="button is-info is-rounded" onClick={addFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// export default AdditionalFeature;
export default connect(null, {addFeature})(AdditionalFeature);
