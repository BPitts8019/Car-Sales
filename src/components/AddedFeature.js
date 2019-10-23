import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from "../actions/car.js";

const AddedFeature = ({feature, removeFeature}) => {
   return (
      <li>
         {/* Add an onClick to run a function to remove a feature */}
         <button 
            className="button"
            onClick={() => {removeFeature(feature)}}
         >X</button>
         {feature.name}
      </li>
   );
};

const mapDispatchToProps = {
   removeFeature
};

export default connect(null, mapDispatchToProps)(AddedFeature);
