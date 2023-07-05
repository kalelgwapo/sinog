import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../AddNewEventButton/AddNewEventButton.css'
import EventCard from '../EventCard/EventCard'
import eventsLists from '../../hooks/EventsList'


const AddNewEventButton = () => (
  <div className='AddNewEventButton'>
    <button className='btn btn-success' onClick={eventsLists} style={{width: '100%'}}>Test</button>
  </div>
);

export default AddNewEventButton;
