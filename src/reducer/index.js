export const appReducer = (state, action) => {
  switch(action.type) {

    case "ADD_FEATURE":
      return {
        ...state,
        item: action.payload
      };

    case "REMOVE_FEATURE":
      return {

      };
    
    case "BUY_ITEM":
      return{

      };

    default:
      return state;
};

export const initialState = {
  additionalPrice: 0,
  car: 
  {
    price: 26395,
    name: '2019 Ford Mustang',
    id: Date.now(),
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