import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import PersonDetails from "./person-details.js";
import Comments from './comments';
import FavoriteFood from './favorite-food';
import FavoriteCity from './favorite-city';
import RadioOption from './radio-option';


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
              <p id="description">Please provide some Feedback?</p>

              <form id="survey-form" action="">
                <PersonDetails people={this.handleDetails} info={this.state}/>
                <FavoriteFood />
                <FavoriteCity />
                <RadioOption />
                <Comments />
                <input id="submit" type="submit" onClick={this.handleClick}/>

                </form>
            </div>
        );
    }
}

export default SurveyContainer;
