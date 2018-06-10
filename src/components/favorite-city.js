import React, {Component} from 'react'
//import PropTypes from 'prop-types'

class FavoriteCity extends Component{
   constructor(){
    super();

    this.state={

    }
  }
  render() {
    return (
      <div className="details">
        <h2>Favorite City</h2>
        <p>Choose your favorite city: </p>
        <select id="dropdown">
          <option className="dropdown" value="NYC">NYC</option>
          <option className="dropdown" value="SF">San Francisco</option>
          <option className="dropdown" value="paris">Paris</option>
          <option className="dropdown" value="LA">LA</option>
        </select>

      </div>
    );
  }
}

export default FavoriteCity;
