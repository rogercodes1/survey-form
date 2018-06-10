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
                    <label htmlFor="name">Name: </label></div>
                  <div className="moveRight">
                    <input id="name" type="text" placeholder={this.props.info.name} onChange={this.handleChange}/> </div>

                  <div className="moveLeft">
                    <label htmlFor="age">Age: </label></div>
                  <div className="moveRight">
                    <input id="age" type="number" placeholder={this.props.info.age}/></div>

                  <div className="moveLeft">
                    <label htmlFor="email"> Email:</label></div>
                  <div className="moveRight">
                    <input id="email" type="email" placeholder={this.props.info.email}/></div>

                </div>
            </div>
        );
    }
}

export default PersonDetails;
