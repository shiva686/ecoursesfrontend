import React from 'react';
import './contact.scss'
const contact = require('./Photos/Artboard.png');
const Contact =()=>{
	return(
		 <>
		 <div className="container">
		  <h1 className="contact text-center text-capitalize">Contact Us</h1>
          <div className="row">
          <div className="col-md-6">
          <div className = "bg-light" >
          	<form>
          	 <label>Name</label>
          	 <br/>
          	 <input type="text" className="name"/>
          	 <br/>
          	 <label>Email</label>
          	 <br/>
          	 <input type="email" className="email"/>
          	 <br/>
          	 <label>Message</label>
          	 <br/>
          	 <textarea type="textarea" className="textarea" />
          	 <br/>
          	 <a className="btn btn-primary">Submit</a>
          	</form>
          </div>
          </div>
          <div className="col-md-6 bg-danger">
           <div className ="contact_number">
           <h4>Email</h4>
           <p>smartwebtechno898@gmail.com</p>
           <h4>Contact number</h4>
           <p>+91 00000000</p>
           </div>
          </div>
          </div>
          </div>
          <div className="bg-gray">
           <i className="fa fa-copyright" aria-hidden="true"></i>2020 copyright E-Clases
          </div>
		</>);
}
export default Contact;