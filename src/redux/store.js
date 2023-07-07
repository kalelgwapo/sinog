import { configureStore } from '@reduxjs/toolkit'
import eventsListSlice from './EventsListStore'

export default configureStore({
  reducer: {
    eventsList: eventsListSlice
  }
})