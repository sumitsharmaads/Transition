import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Slide left duration ={2000}>
          <div className="gallery">
			<a href="#">
			  <img src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg" alt="Cinque Terre" width="600" height="400"/>
			</a>
			<div className="desc">Add a description of the image here</div>
		  </div>
		</Slide>
		  <div className="gallery">
			<a href="#">
			  <img src="https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg" alt="Cinque Terre" width="600" height="400"/>
			</a>
			<div className="desc">Add a description of the image here</div>
		  </div>
		<Slide right duration = {2000}>
		  <div className="gallery">
			<a href="#">
			  <img src="https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317__340.jpg" alt="Cinque Terre" width="600" height="400"/>
			</a>
			<div className="desc">Add a description of the image here</div>
		  </div>
		</Slide>
      </div>
    );
  }
}

export default Content;
