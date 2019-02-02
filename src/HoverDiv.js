import React, { Component } from 'react';

class HoverDiv extends Component {
  render() {
    return (
        <div className="HoverDiv">
	      <div className="right-HoverDiv">
		       <div className="content-HoverDiv">
		       		<h1>Cloud Solutions</h1>
		       		<p> We provide cloud solutions for Amazon Web Services, 
		       		    Microsoft Azure and Google Cloud and many other cloud services with great quality.
		       		    Cloud solutions help transform businesses into great success in very less time. 
		       		    There are many cloud solution provides available.
		       		    The leading cloud providers are Amazon Web Services(AWS), Microsoft Azure and Google Cloud.
		       		</p>
		       </div>
	       </div>
	       <div className="right-HoverDiv">
	       		<div className="content-HoverDiv">
	       			<h1>Managed IT services</h1>
		       		<p> We provide cloud solutions for Amazon Web Services, 
		       		    Microsoft Azure and Google Cloud and many other cloud services with great quality.
		       		    Cloud solutions help transform businesses into great success in very less time. 
		       		    There are many cloud solution provides available.
		       		    The leading cloud providers are Amazon Web Services(AWS), Microsoft Azure and Google Cloud.
		       		</p>
		       </div>
	       </div>
        </div>
    );
  }
}

export default HoverDiv;
