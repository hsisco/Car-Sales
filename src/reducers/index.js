export const appReducer = (state, action) => {
  switch(action.type) {

    case "ADD_FEATURE":
      const newFeature = {
        item: action.payload
      }

    case "REMOVE_FEATURE":
    
    case "BUY_ITEM":