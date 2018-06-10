import React, {Component} from 'react'
//import PropTypes from 'prop-types'

class PersonDetails extends Component{
     constructor(props){
        super(props);
        this.state={

        }
    }
    handleChange = (event) => {
      this.setState({
        name : event.target.value
      })
      console.log("change", event.target.value);
    }
    render() {
        return (
            <div>
                <div className="details">

                  <div className="moveLeft">
                    <label id="name-label" htmlFor="name">Name: </label></div>
                  <div className="moveRight">
                    <input id="name" type="text" placeholder="Enter your fullname" onChange={this.handleChange}/> </div>

                  <div className="moveLeft">
                    <label id="age-label"htmlFor="age">Age: </label></div>
                  <div className="moveRight">
                    <input id="age" type="number" pattern="/[0-9]/" max="100" min="13" placeholder="13+"/></div>

                  <div className="moveLeft">
                    <label id="email-label" htmlFor="email"> Email:</label></div>
                  <div className="moveRight">
                    <input id="email" type="email" placeholder="Enter your email..."/></div>

                </div>
            </div>
        );
    }
}

export default PersonDetails;
