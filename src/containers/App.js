import React, { Component } from 'react';
import CardInfo from '../components/CardInfo';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then((resp) => {
        this.setState({people: resp.results})
      });
  }

  render() {
    const {people} = this.state;
    return(
      <div className='tc'>
        <img src="https://www.freepnglogos.com/uploads/star-wars-logo-png-10.png" width="350" alt="Star Wars" className='pb4'/>
        <div>
          <CardInfo people={people} />
        </div>
      </div>
  )}   
}

export default App;