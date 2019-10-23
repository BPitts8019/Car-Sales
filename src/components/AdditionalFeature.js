import React from 'react';

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

export default AdditionalFeature;
