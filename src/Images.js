import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Images extends Component {
  constructor() {
       super();
       this.state = {
          showHeader: 'none'
       }
    }

   componentDidMount() {
      setTimeout(() => this.setState({showHeader: "block"}), 5000);
   }

  render() {
    return (
      <div className="Images">
         <div className= "myImage">
         	<img src ="https://static.wixstatic.com/media/ea71bb_370144e721bc43c289bfb35fed3376d1~mv2_d_4500_2124_s_2.jpg" width= "1362px"
               height = "534px"/>
	        <div className="sideContent" style ={{display:this.state.showHeader}}>
	        	<Slide left duration= {2000}>
	         	<div className="sideContent-tran">
	         		<h1 className="heading">IT Consulting and Services</h1>
	         		<p>
	         			We help our partners in every step of the<br/>
	         			 way to realize their vision, starting from defining<br/>
	         			 their digital strategy, helping them in building the best<br/>
	         			 team and bringing their digital life to the world. 
	         		</p>
	         	</div>
	         	</Slide>
	         </div>
           <div className="FindMore">
              <span><a className="Find">Find More</a></span>
           </div>
         </div>
      </div>
    );
  }
}

export default Images;
