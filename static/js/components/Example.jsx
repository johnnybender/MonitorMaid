// Example.jsx
import React from 'react';
import Boostrap from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
axios
    .get(window.location.href + 'dev/bpdata.json')
    .then(res => this.setState({ posts: res.data }))
    .catch(err => console.log(err))
}

  render() {
    return (
      <div>
        <h4>James Bond movies:</h4>
        <ul>
          {this.state.movies.map((movie, i) => <li key={i}>{movie}</li>)}
        </ul> 
      </div>
    );
  }
}