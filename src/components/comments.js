import React, {Component} from 'react'
//import PropTypes from 'prop-types'

class Comments extends Component{
     constructor(){
        super();

        this.state={

        }
    }
    render() {
        return (
            <div>
                <h2>Comments</h2>
                <div className="details">
                  <div><label htmlFor="comments">Any comments or Suggestions?
                  </label>
                    </div>
                    <div><textarea id="comments" name="comments" placeholder="Show us some love">
                    </textarea></div>


                </div>
            </div>
        );
    }
}

export default Comments;
