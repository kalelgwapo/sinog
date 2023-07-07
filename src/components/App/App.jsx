
import './App.css';
import EventCard from '../EventCard/EventCard';
import AddNewEventButton from '../AddNewEventButton/AddNewEventButton'
import EventsListRedux from '../../redux/EventsListStore'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// const store = EventsListRedux
// const [eventsList, setEventsList] = useState<EventCard>([]);
// console.log(store.getState());
const App = () => {
  const count = useSelector(state => state.eventsList);
  console.log(count);

  return (
    <div className="App">
      <div>title</div>
      <div className='col-md-3' style={{ border: '1px black solid' }}>

        <AddNewEventButton />
        {count.events.map(d => (<EventCard name={d.name} />))} 
        <EventCard name="Ultimate" />
      </div>
      <div className='col-md-9'>

      </div>
    </div>
  );
}

export default App;
