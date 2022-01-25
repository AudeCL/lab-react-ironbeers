import React, { Component } from 'react'
import { Link } from "react-router-dom"


class RandomBeer extends Component {
  
    render(){
      return(
        <div>
            <div style={{backgroundColor: "#3dc4fd", height: "100px", display:"flex", fontSize:"4rem"}}>
                <Link style={{textDecoration: 'none', margin: "auto"}} to="/">🏠</Link>
            </div>
            
            <h1>RANDOM BEER PAGE</h1>

        </div>
      )
    }
  }
  export default RandomBeer