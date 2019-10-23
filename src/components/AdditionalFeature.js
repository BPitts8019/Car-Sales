import React from 'react';
import {connect} from "react-redux";
import {addFeature} from "../actions/car.js";

const AdditionalFeature = ({ feature, addFeature }) => {
   const handleClick = event => {
      addFeature(feature);
   };

   return (
      <li>
         {/* Add an onClick that will let you add a feature to your car */}
         <button 
            className="button" 
            onClick={handleClick}
         >Add</button>
         {feature.name} (+{feature.price})
      </li>
   );
};

const mapDispatchToProps = dispatch => {
   return {
      addFeature: feature => {dispatch(addFeature(feature))}
   };
};

export default connect(null, mapDispatchToProps)(AdditionalFeature);
