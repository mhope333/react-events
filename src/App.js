import React, {Component} from 'react';
import Headers from './Components/Headers/Headers';
import {Header} from 'semantic-ui-react';
import EventsList from './Components/EventsList/EventsList';
import './App.css';
import './styles/styles.css';

class App extends Component {
  render() {
    return (
        <div>
            <Headers/>
            <div className="imageBackground">
              <Header size='huge'>Paperstr Events</Header>
              <EventsList/>
            </div>
        </div>
    )
  }
}

export default App;