import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios';

class AllBeer extends Component {
  state= {
   allBeer: []
  }
  getAllBeers=()=>{
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(responsefromapi=>{
      console.log("coucou", responsefromapi)
      this.setState({
        allBeer: responsefromapi.data
      })
    })
    .catch(err => console.log(err))
  }
  componentDidMount(){
    this.getAllBeers()
  }
    render(){
      
      return(
        <div>

            <div style={{backgroundColor: "#3dc4fd", height: "80px", display:"flex", fontSize:"4rem"}}>
                <Link style={{textDecoration: 'none', margin: "auto"}} to="/">🏠</Link>
            </div>            
            <h1>ALL BEERS</h1>
           <div>

           {this.state.allBeer.map(beer=>{
             return(
               
               <div key={beer._id}>
               <Link to= {`/beer/${beer.id}`}>
                  <img src= {beer.image_url} />
                  <h2>{beer.name}</h2>
                  <h3>{beer.tagline}</h3>
                  <h4>{beer.contributed_by}</h4>
               </Link>
               
               
               

               </div>
             )
           
           })}
           </div>


        </div>
      )
    }
  }
  export default AllBeer