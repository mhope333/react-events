import React, {Component} from 'react';
import {Header, Icon} from 'semantic-ui-react';
import './Headers.css';

class Headers extends Component {
  render() {
  return <div>
    <Header as='h3' block>
      <Icon name='lightning'/>MH Events
    </Header>
  </div>
  }
}

export default Headers;