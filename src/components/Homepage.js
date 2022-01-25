import React, { Component } from 'react'
import beers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"

import "./Homepage.css"


class Homepage extends Component {
  
    render(){
      return(
        <div className="Homepage">
            <div className="allBeers">
                <img src={beers} alt={"All Beers"} /> 
                <h1>All Beers</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Elementum nibh tellus molestie nunc non. Faucibus interdum posuere lorem ipsum dolor. Facilisis gravida neque convallis a cras. Viverra tellus in hac habitasse platea dictumst vestibulum. Quis enim lobortis scelerisque fermentum. Odio tempor orci dapibus ultrices in iaculis nunc. Turpis massa tincidunt dui ut. Leo urna molestie at elementum eu facilisis sed. Tincidunt augue interdum velit euismod in pellentesque. Cras semper auctor neque vitae tempus quam pellentesque.
                </p>

            </div>
            <div className="randomBeer">
                <img src={randomBeer} alt={"Random Beer"} />
                <h1>Random Beer</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Elementum nibh tellus molestie nunc non. Faucibus interdum posuere lorem ipsum dolor. Facilisis gravida neque convallis a cras. Viverra tellus in hac habitasse platea dictumst vestibulum. Quis enim lobortis scelerisque fermentum. Odio tempor orci dapibus ultrices in iaculis nunc. Turpis massa tincidunt dui ut. Leo urna molestie at elementum eu facilisis sed. Tincidunt augue interdum velit euismod in pellentesque. Cras semper auctor neque vitae tempus quam pellentesque.
                </p>

            </div>
            <div className="newBeer">
                <img src={newBeer} alt={"New Beer"} />
                <h1>New Beer</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Elementum nibh tellus molestie nunc non. Faucibus interdum posuere lorem ipsum dolor. Facilisis gravida neque convallis a cras. Viverra tellus in hac habitasse platea dictumst vestibulum. Quis enim lobortis scelerisque fermentum. Odio tempor orci dapibus ultrices in iaculis nunc. Turpis massa tincidunt dui ut. Leo urna molestie at elementum eu facilisis sed. Tincidunt augue interdum velit euismod in pellentesque. Cras semper auctor neque vitae tempus quam pellentesque.
                </p>
            </div>
        </div>
      )
    }
  }
  export default Homepage