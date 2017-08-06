// App.jsx
import React from 'react';
import VitalSnap from './components/VitalSnap';
import ScrollVitals from './components/ScrollVitals';
import { Button } from 'react-bootstrap';

var $ = require('jquery');

export default class App extends React.Component {
render () {
    return (
        <div>
          <VitalSnap/>
        </div>
    );
  }
}