import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../AddNewEventButton/AddNewEventButton.css'
import EventCard from '../EventCard/EventCard'
import { useSelector, useDispatch } from 'react-redux'
import { insertNewEvent } from '../../redux/EventsListStore'


const AddNewEventButton = () => {
  const dispatch = useDispatch();


  return (
  <div className='AddNewEventButton'>
    <button className='btn btn-success' onClick={() => dispatch(insertNewEvent({name: 'test2'}))} style={{width: '100%'}}>Add Event</button>
  </div>
  )
}

export default AddNewEventButton;
