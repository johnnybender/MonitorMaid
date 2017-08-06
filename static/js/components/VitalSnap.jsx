// VitalSnap.jsx
import React from 'react';
import SVGInline from "react-svg-inline";
import Bootstrap from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class VitalSnap extends React.Component {
render () {
  const boxStyle= {
    fontSize: '20em',
    color: 'EE3838',
  };
  const bpSysNum= {
    fontSize: '3.5em',
    color: 'EE3838',
    position: 'absolute',
    left: '.8em',
    top: '1.3em'
  };
  const bpSys= {
    fontSize: '1.8em',
    color: 'EE3838',
    position: 'absolute',
    left: '1.52em',
    top: '4.1em'
  };
  const bpLine= {
    position: 'absolute',
    stroke: 'EE3838',
    strokeWidth: '.7em'
  }
  const bpDia= {
    fontSize: '1.8em',
    color: 'EE3838',
    position: 'absolute',
    left: '2.8em',
    top: '7em'
  };
  const bpDiaNum= {
    fontSize: '3.5em',
    color: 'EE3838',
    position: 'absolute',
    left: '2.25em',
    top: '3.4em'
  };
  const bpText= {
    fontSize: '1.8em',
    color: 'EE3838',
    position: 'absolute',
    left: '.9em',
    top: '10em'
  };
  const lastValueText= {
    fontSize: '1.8em',
    color: 'B9B9B9',
    position: 'absolute',
    left: '1.8em',
    top: '11.3em'
  };
    return (
      <div>
        <div className="fa-stack">
          <i className="fa fa-square-o fa-stack-2x" style={boxStyle}></i>
          <i className="fa-stack-2x" style={bpSysNum}>120</i>
          <i className="fa-stack-2x" style={bpSys}>sys</i>
          <svg height="1000" width="1000">
            <line x1="12.1em" y1="5em" x2="3.2em" y2="13.8em" style={bpLine}/>
          </svg>
          <i className="fa-stack-2x" style={bpDia}>dia</i>
          <i className="fa-stack-2x" style={bpDiaNum}>100</i>
        </div>
        <i style={bpText}>Blood Pressure</i>
        <i style={lastValueText}>Last Value</i>
      </div>
    );
  }
}