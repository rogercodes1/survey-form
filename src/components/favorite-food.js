import React, {Component} from 'react'
//import PropTypes from 'prop-types'

class FavoriteFood extends Component{
     constructor(){
        super();

        this.state={

        }
    }
    render() {
        return (
            <div className="">
              <h2>Favorite Food</h2>
              <div id="foodOptions">

                  <input type="checkbox" name="foods" value="Ramen"/>Ramen <br/>
                  <input type="checkbox" name="foods" value="Pizza"/>Pizza<br/>
                    <input type="checkbox" name="foods" value="Burgers"/>Burgers <br/>
                    <input type="checkbox" name="foods" value="Ice Cream"/>Ice Cream<br/>
                      <input type="checkbox" name="foods" value="Cookies"/>Cookies <br/>
                      <input type="checkbox" name="foods" value="Seafood"/>Seafood<br/>

              </div>

            </div>
        );
    }
}

export default FavoriteFood;
