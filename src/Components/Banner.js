import React, { Component } from 'react'
import { movies } from './moviesList'
//import App from '../App';
import '../App.css';
export default class Banner extends Component {
  render() {
    let movie = movies.results;
    return (
        <div className="card bannerImage" >
        <img style={{height:"40vw",width:"100vw"}} src={'https://tse2.mm.bing.net/th/id/OIP.pOFz6ljZDZrQBkxzcJQItQHaK-?pid=ImgDet&rs=1'}/>
        <div class="card-body">
          <h1 style={{position:"absolute", top:"55vh", color:"yellow", backgroundColor:"lightblue"}} class="card-title">{movie[0].original_title}</h1>
          <p style={{position:"absolute", top:"65vh", color:"black"}} class="card-text">{movie[0].overview}</p>
          <a style={{position:"absolute", top:"77vh"}}href="#" class="btn btn-primary">Download Link</a>
        </div>
      </div>
    )
  }
}
