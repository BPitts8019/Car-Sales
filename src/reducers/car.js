import {ADD_FEATURE} from "../actions/car.js";
import {REMOVE_FEATURE} from "../actions/car.js";

const initialState = {
   additionalPrice: 0,
   car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
         'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
   },
   additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
   ]
};

const addFeature = (state, feature) => {
   const newState = {...state};

   //add feature price to additional prices
   newState.additionalPrice += feature.price;
   //remove feature from additionalFeatures
   newState.additionalFeatures = newState.additionalFeatures.filter(item => item.id !== feature.id);
   //add feature to car.features
   // newState.car.features.push(feature);
   newState.car.features = [
      ...newState.car.features,
      feature
   ];

   console.log(`New State: ${JSON.stringify(newState, null, 3)}`);

   return newState;
};
const removeFeature = (state, feature) => {
   const newState = {...state};

   //remove feature from additionalFeatures
   newState.additionalFeatures = newState.additionalFeatures.filter(item => item.id !== feature.id);
   //add feature to car.features
   newState.car.features = [
      ...newState.car.features,
      feature
   ];
   // newState.car.features.push(feature);

   console.log(`New State: ${JSON.stringify(newState, null, 3)}`);

   return newState;
};

export default function (state = initialState, action) {
   switch (action.type) {
      case ADD_FEATURE:
         console.log(`Adding: ${JSON.stringify(action.payload, null, 3)}`);
         return addFeature(state, action.payload);
      default:
         return state;
   }
};