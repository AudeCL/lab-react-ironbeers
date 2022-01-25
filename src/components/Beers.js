import React, { Component } from 'react'
import { Link } from "react-router-dom"

class AllBeer extends Component {
  
    render(){
      return(
        <div>
            <div style={{backgroundColor: "#3dc4fd", height: "100px", display:"flex", fontSize:"4rem"}}>
                <Link style={{textDecoration: 'none', margin: "auto"}} to="/">🏠</Link>
            </div>            
            <h1>ALL BEERS</h1>

        </div>
      )
    }
  }
  export default AllBeer