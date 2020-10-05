import React from 'react'
import trainingIcon from '../../images/trainingIcon.png';
import marketingIcon from '../../images/marketingIcon.png';
import seminarIcon from '../../images/seminarIcon.png';
import {Button, Modal, Image, Header, Icon, Card} from 'semantic-ui-react'
import './Event.css';

function dateTimeConverter(unixTimestamp) {
  const dateObj = new Date(unixTimestamp * 1000); 
  const utcString = dateObj.toUTCString(); 
  const utcDateString = utcString.substring(0, utcString.length-4); // removes GMT
  return utcDateString;
}

function iconSelector(category) {
  if (category === 'Seminars') {
    return seminarIcon;
  } else if (category === 'Trainings') {
    return trainingIcon;
  } else if (category === 'Marketing') {
    return marketingIcon;
  } else {
    return trainingIcon;
  }
}

const event = (props) => {

  const category = props.event.category["1"].title;

  const favouriteEvents = props.favourites;
  const matchEventInFavourites = favouriteEvents.filter(event => event.id === props.event.id);
  const isFavourite = matchEventInFavourites.length === 1 ? true : false;

  return (
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={iconSelector(category)} alt="Icon" className="ui rounded image"
        />
        <Card.Header>{props.event.name.en || props.event.name.fi}</Card.Header>
        <Card.Meta>{category}</Card.Meta>
        <Card.Description>Start time: {dateTimeConverter(props.event.start_time)}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Modal trigger={<Button floated='left' className="purple">More Info</Button>} closeIcon>
          <Modal.Header className="modalHeader">Event Information</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={iconSelector(category)}/>
            <Modal.Description>
              <Header as="h2">{props.event.name.en || props.event.name.fi}</Header>
              <div className="modalContent">
                <p>Location: {props.event.location.en || props.event.location.fi}</p>
                <p>Start time: {dateTimeConverter(props.event.start_time)}</p>
                <p>Timezone: {props.event.timezone}</p>
                <p>Enrollment deadline: {dateTimeConverter(props.event.enrollment_deadline_utc)}</p>
              </div>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <div className="registerButton">
              <a href={props.event.enrollment_url} target="_blank" rel="noopener noreferrer">
                <Button floated='right' className="purple">Register</Button>
              </a>
            </div>
          </Modal.Actions>
        </Modal>
        <Button floated='right' onClick={() => props.toggleFavourite(props.event.id)} basic icon>
          {isFavourite ? <Icon color='yellow' name="star"/> : <Icon color='yellow' name="star outline"/>}
        </Button>
      </Card.Content>
    </Card>
  )
}

export default event;
