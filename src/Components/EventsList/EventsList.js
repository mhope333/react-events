import React, {Component} from 'react';
import {Container, Button, Header, Card} from 'semantic-ui-react'
import Event from '../Event/Event';
import './EventsList.css';
// import {apiCall} from '../../api-services/eventsService'; 
import {cloneDeep} from 'lodash'
import {apiData} from '../../api-services/data/index';

// commented code was real, api logic

export default class EventsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      errorMsg: '',
      favourites: []
    }
  }

  getAllEvents() {
    this.setState({events: apiData.allApiData})
    // apiCall('events?as_array=1')
    // .then(res => {
    //   this.setState({events: res})
    // })
    // .catch(err => {
    //   this.setState({errorMsg: 'Error retreiving data...'})
    // });
  }

  componentDidMount() {
   this.getAllEvents();
  }

  updateList(categoryId = undefined) { 
    if (categoryId) {
      const categoryMap = {
        '13344': apiData.marketingData,
        '13341': apiData.seminarData,
        '13338': apiData.trainingData
      }
      this.setState({events: categoryMap[categoryId]})
      // apiCall(`events?category=${categoryId}&as_array=1`)
      // .then(res => {
      //   this.setState({events: res})
      // })
      // .catch(err => {
      //   this.setState({errorMsg: 'Error retreiving data...'})
      // });
    } else {
      this.getAllEvents();
    } 
  }

  filterByMonthUpdate(month) {
    const monthMap = {
      'july': apiData.julyData,
      'august': apiData.augustData,
      'september-': [] // TO DO add some data for sept onwards
    }
    this.setState({events: monthMap[month]})
    // TO DO: dont hard code
    // const monthMap = {
    //   'july': '1593558000-1596236400',
    //   'august': '1596240000-1598918400',
    //   'september-': '1598918400-'
    // }
    // apiCall(`events?start_time=${monthMap[month]}&as_array=1`)
    // .then(res => {
    //   this.setState({events: res})
    // })
    // .catch(err => {
    //   this.setState({errorMsg: 'Error retreiving data...'})
    // });
  }

  toggleFavourite = (eventId) => {
    const favouritesClone = cloneDeep(this.state.favourites);

    const matchEventInFavourites = favouritesClone.filter(event => event.id === eventId);

    if(matchEventInFavourites.length === 1) { // if event is in favourites array
      const updatedFavourites = favouritesClone.filter(event => event.id !== eventId); // remove event from favourites array
      this.setState({favourites: updatedFavourites}); 
    } else { // if not already present in favourites array add it
      const updatedFavourites = cloneDeep(favouritesClone);
      updatedFavourites.push({id: eventId});
      this.setState({favourites: updatedFavourites});
    }
  }

  render() {
    const {events, errorMsg, favourites} = this.state;
    return (
      <div className="cardContainer">
        <Card fluid>
          <div className="filters">
            <Container>
              <Header as='h3' floated='left'>Filters:</Header>
              <Button.Group floated='left'>
                <Button onClick={() => this.updateList()}>All Events</Button>
                <Button onClick={() => this.updateList("13341")}>Seminars</Button>
                <Button onClick={() => this.updateList("13338")}>Training</Button>
                <Button onClick={() => this.updateList("13344")}>Marketing Events</Button>
                {/* Below is real api logic */}
                {/* <Button onClick={() => this.updateList(13341)}>Seminars</Button>
                <Button onClick={() => this.updateList(13338)}>Training</Button>
                <Button onClick={() => this.updateList(13344)}>Marketing Events</Button> */}
              </Button.Group>
              <Header as='h3' floated='left'>Dates:</Header>
              <Button.Group floated='left'>
                <Button onClick={() => this.filterByMonthUpdate('july')}>July</Button>
                <Button onClick={() => this.filterByMonthUpdate('august')}>August</Button>
                <Button onClick={() => this.filterByMonthUpdate('september-')}>September +</Button>
              </Button.Group>
            </Container>
          </div>
          {errorMsg ?<div className="apiError">{errorMsg}</div> : 
           <div className="cardsContainer">
            <Card.Group>
            {events.map(event => <Event key={event.id} event={event} toggleFavourite={this.toggleFavourite} favourites={favourites}/>)}
            </Card.Group>
          </div>}
        </Card>
      </div>
    )
  }
}
 