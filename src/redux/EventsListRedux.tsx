import { configureStore } from '@reduxjs/toolkit'


  
const intialList = {
    type: 'event/eventsList',
    events: []
}


const eventsReducer = (state = intialList, action) => {
  // Check to see if the reducer cares about this action
  if (action.type === 'event/eventsList') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      events: []
    }
  }
  // otherwise return the existing state unchanged
  return state
}

export default configureStore({ reducer: eventsReducer })

