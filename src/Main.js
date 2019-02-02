import React, { Component } from 'react';
import './transitionCompo.css';
import Content from './Content';
import Images from  './Images';
import HoverDiv from './HoverDiv';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <h1 className="Border"> ATT - 43 Navigationbar using Router</h1>
        <div className = "Menu-bar">
        	<ul className ="Menu">
        		<li><a className ="menubar-menu">Home</a></li>
        		<li><a className ="menubar-menu">News</a></li>
        		<li><a className ="menubar-menu">Latest Updates</a></li>
        		<li><a className ="menubar-menu">About Us</a></li>
        		<li><a className ="menubar-menu">Contact Us</a></li>
        	</ul>
        </div>
        <Images />
        <div className="Space"></div>
        <Content />  
        <HoverDiv />     
      </div>
    );
  }
}

export default Main;
