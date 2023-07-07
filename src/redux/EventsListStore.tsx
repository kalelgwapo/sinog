import { createSlice } from '@reduxjs/toolkit'

export const eventsListSlice = createSlice({
  name: 'eventsList',
  initialState: {
    events: [{name: 'ultimate1'}]
  },
  reducers: {
    insertNewEvent: (state, action) => {
      state.events.push(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { insertNewEvent } = eventsListSlice.actions
  
export default eventsListSlice.reducer

