export default function manageBand(state = {
  bands: [],
}, action) {
  
  switch(action.type) {
    case 'ADD_BAND':
<<<<<<< HEAD
      return { ...state, bands: [...state.bands, action.band] }
=======
      return { todos: state.bands.concat(action.payload.name) }
>>>>>>> 98ce6907ed973f06ce53395bcb4502273ed42bd8
      break
      
    default:
      return state
      break
  }
};
