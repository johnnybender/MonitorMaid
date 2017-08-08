// ScrollVitals.jsx
import React from 'react';
import Boostrap from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class ScrollVitals extends React.Component {

render () { 
    const formElements= [
        {
            systolic: '120',
            diastolic: '80',
            date: '2017-08-03',
            color: 'EE3838'
        },
        {
            systolic: '110',
            diastolic: '75',
            date: '2017-08-04',
            color: 'EE3838'
        },
        {
            systolic: '90',
            diastolic: '80',
            date: '2017-08-04',
            color: 'EE3838'
        }
    ];
        const renderElements = formElements.map((bp, index) =>
            <ul key={index}><span style={{color: bp.color, listStyleType: 'none', fontSize: '1.5em'}}> {bp.systolic} / {bp.diastolic} </span></ul>
        );

    var myObject = JSON.parse(myjsonstring);

    return (
        <div>
            <ul style={{padding: '0', margin: '0'}}> {renderElements} </ul>
        </div>
    )
  }
}



