
import './App.css';
import EventCard from '../EventCard/EventCard';
import AddNewEventButton from '../AddNewEventButton/AddNewEventButton'

function App() {
  return (
    <div className="App">
      <div>title</div>
      <div className='col-md-3' style={{border: '1px black solid'}}>

        <AddNewEventButton />
        <EventCard name="Ultimate" />
      </div>
      <div className='col-md-9'>

      </div>
    </div>
  );
}

export default App;
