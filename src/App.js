import './App.css';
import React, {useState} from "react";
import {useEffect} from "react";
import TimesheetContainer from './TimesheetContainer/TimesheetContainer';
import Banner from './Banner/Banner';

const queryTimesheets = (setEntries, setErrorMessage) => {
    const endpoint = `http://localhost:5000/api/v1/timesheets`;
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setEntries(data.data))
      .catch(error => {
       setErrorMessage(error.message);
      });
  }
  
  const App = () =>  {
    const [entries, setEntries] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    queryTimesheets(setEntries, setErrorMessage);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="body">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <Banner />
        <TimesheetContainer 
          entries={entries} 
          errorMessage={errorMessage} 
          />
        </div>
      </header>
    </div>
  );
}


export default App;
