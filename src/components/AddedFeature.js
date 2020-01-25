import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/carActions';

const AddedFeature = props => {

  const removeFeature = () => {
    console.log('remove feature: ' + props.feature.name);
    props.removeFeature(props.feature);
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      {/* <button className="button">X</button> */}
      <button className="button is-danger" onClick={removeFeature}>Cancel</button>
      {props.feature.name}
    </li>
  );
};

// export default AddedFeature;
export default connect(null, {removeFeature})(AddedFeature);
