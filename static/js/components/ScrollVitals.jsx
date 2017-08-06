// ScrollVitals.jsx
import React from 'react';
import Boostrap from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class ScrollVitals extends React.Component {
render () {
    const formFont= {
        fontSize: '1.5em',
  };
  {
    const formElements= {
        '1': {
            systolic: '120',
            diastolic: '80',
            date: '2017-08-03',
            color: 'EE3838'
        },
        '2': {
            systolic: '110',
            diastolic: '75',
            date: '2017-08-04',
            color: 'EE3838'
        },
        '3': {
            systolic: '90',
            diastolic: '80',
            date: '2017-08-04',
            color: 'EE3838'
        }
    }
  };
    return (
      <div>
        <form>
            <select multiple className="form-control" style={formFont}>
                <option> formElements.systolic / formElements.diastolic </option>
            </select>
        </form>
      </div>
    );
  }
}