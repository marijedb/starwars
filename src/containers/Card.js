import React, { Component } from 'react';

class Card extends Component {
    constructor() {
        super()
        this.state = {
            backCard: false
        }
        this.flipCard = this.flipCard.bind(this);
    }

    flipCard() {
        this.setState({backCard: !this.state.backCard});
    }

    render() {
        if (!this.state.backCard) {
          return (
            <div className="tc f7-ns f7-m f4-l bg-near-black yellow dib pa3 ma2 grow shadow-5 h5 ba bw1 w-30-ns w-40-m w-100 b--yellow">
              <div>
                <h2>{this.props.name}</h2>
                <button
                  className="f5 link dim ba bw1 b--black ph3 pv2 mb2 dib black w-100 h-50 bg-light-yellow"
                  onClick={this.flipCard}
                >
                  Show information
                </button>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </div>
            </div>
          );
        } else {
          return (
            <div className="tc f7-ns f7-m f4-l bg-near-black yellow dib pa3 ma2 grow shadow-5 h5 ba bw1 w-30-ns w-40-m w-100 b--yellow">
              <div>
                <h2>{this.props.name}</h2>
                <button
                  className="f5 link dim ba bw1 b--black ph3 pv2 mb2 dib black w-100 h-50 bg-light-yellow"
                  onClick={this.flipCard}
                >
                  Hide information
                </button>
                <p>Birth year: {this.props.birth_year}</p>
                <p>Hair color: {this.props.hair_color}</p>
              </div>
            </div>
          );
        }
      }
}

export default Card;