import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div class='Heading' style={{color : "blue", display:"flex", backgroundColor: "lightblue",padding: "10px"}} >
        <h1 style={{marginLeft: "10rem"}}>InstaMovies</h1>
        <h3 style={{marginLeft: "10rem",alignContent:"center"}}>Favorites</h3>
      </div>
    )
  }
}
