import React, {Component} from 'react'
//import PropTypes from 'prop-types'

class RadioOption extends Component{
   constructor(){
    super();

    this.state={

    }
  }
  render() {
    return (
      <div className="details">
        <p>Best way to contact? </p>
        <div>
        <input type="radio" id="contactChoice1"
         name="contact" value="email" />
       <label htmlFor="contactChoice1"> Email</label>

        <input type="radio" id="contactChoice2"
         name="contact" value="phone"/>
       <label htmlFor="contactChoice2"> Phone</label>

        <input type="radio" id="contactChoice3"
         name="contact" value="mail"/>
       <label htmlFor="contactChoice3"> Mail</label>
      </div>
      </div>
    );
  }
}

export default RadioOption;
