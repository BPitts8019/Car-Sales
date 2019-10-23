export const ADD_FEATURE = "ADD_FEATURE";

export function addFeature (feature) {
   console.log(`Add Feature In Actions`);
   return {
      type: ADD_FEATURE,
      payload: feature
   }
}