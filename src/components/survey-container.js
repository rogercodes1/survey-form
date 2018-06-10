import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import PersonDetails from "./person-details.js";
import Comments from './comments';
import FavoriteFood from './favorite-food';

class SurveyContainer extends Component{
     constructor(){
        super();

        this.state={
          name : "Roger Perez",
          age : 28,
          email: "roger@gmail.com"

        }
    }
    handleClick=(event) => {
      debugger;
    }
    handleDetails= (people) => {
      debugger;
    }
    render() {
        return (
            <div className="container">
              <h2>Please provide some Feedback?</h2>

              <form action="">
                <PersonDetails people={this.handleDetails} info={this.state}/>
                <FavoriteFood />
                <Comments />
                <input id="button" type="submit" onClick={this.handleClick}/>
                </form>
            </div>
        );
    }
}

export default SurveyContainer;
