export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export function addFeature (feature) {
   console.log(`Add Feature In Actions`);
   return {
      type: ADD_FEATURE,
      payload: feature
   }
}

export function removeFeature (feature) {
   console.log(`Remove Feature In Actions`);
   return {
      type: REMOVE_FEATURE,
      payload: feature
   }
}