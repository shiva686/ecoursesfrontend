import React from 'react'
import './about.scss';
const logo = require('./Photos/logo.jpg')
const About = ()=>{
	return(
		<>
		 <div className="container">
          <h1 className ="about text-capitalize text-center">About Us</h1>
         <div className ="row">
           <div className="col-md-6">
            <img className="logo" src={logo}/>
           </div>
           <div className="col-md-6">
            <h1 className = "text-center">E-Courses</h1>
            <p>we established this company to make digital the world 
               and share the knowledge at low price with compare to others
               and there is no risk of virus beacuse your will study in 
               in online 
               and you can learn anywhere and any time 
           </p>
           <h2>Follow Us on</h2>
           <i className="icon fa fa-github" aria-hidden="true"></i>
           <i className="icon fa fa-facebook" aria-hidden="true"></i>
           <i className="icon fa fa-instagram" aria-hidden="true"></i>
           <i className="icon fa fa-twitter" aria-hidden="true"></i>
           </div>
         </div>
         </div> 
		</>);
}
export default About;