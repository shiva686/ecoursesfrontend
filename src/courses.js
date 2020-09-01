import React , {useEffect , useState} from 'react';
import {Link } from 'react-router-dom';
import {Element} from 'react-scroll';
import './courses.scss'
import Store ,{Dispatch}from './store'
import {Allcourse} from './allcourse'
import Selected from './selected_course';

const Courses = ()=>{

const [login , notlogin]=useState(false)
const [courses , change_courses] = useState(true);
let details;
const [stu_id ,change_id] = useState('')
const [title , change_title] = useState('')
const [description , change_description] = useState('')
const [imageurl , change_imageurl] = useState('')

useEffect(()=>{  


  const hamburger = document.getElementsByClassName('hamburger');
  hamburger[0].addEventListener('click',(e)=>{
  let nav_lists = document.getElementsByClassName('nav-lists');
   if(nav_lists[0].classList.contains('nav-show')){
      nav_lists[0].classList.remove('nav-show')
    }
    else{
      nav_lists[0].classList.add('nav-show')
    }
    });

    details = Store.getState();
    if(details != undefined){
    change_title(details['title']);
    change_description(details['description']);
    change_imageurl(details['imageurl']);
    change_id(details['id'])
    }
   });

const send = (id,imageurl ,title , description)=>{
   
   let promise = new Promise((resolve,err)=>{
    let payload={
     id,
     imageurl,
     title,
     description
     }
     Dispatch(payload)
     resolve();
   })
   
    promise.then(e =>{
    change_courses(false)
   })
 }





const show_dashboard =()=>{
   window.location.assign('/dashboard')
}


	return(<>
     <div className="navs navs-co nav-auto">
      <i className="hamburger fa fa-bars" aria-hidden="true"></i>
      <h1 className ="title text-capitalize">E-Courses</h1>
     	<ul className ="nav-lists">
         <li className ="nav-item1 first-child"><Link style={{textDecoration: 'none','color':'white'}} to="home"  >Home</Link></li>
         <li className ="nav-item1" onClick={()=> change_courses(true)} href="#courses">Courses</li>
         <li className ="nav-item1"><Link style={{textDecoration: 'none','color':'white'}} to="about">About</Link></li>
         <li className ="nav-item1"><Link style={{textDecoration: 'none','color':'white'}} to="contact">Contact Us</Link></li>
          {
             login?<><div onClick={show_dashboard} className="login_image_"></div></>:(<>
             <li data-toggle="modal" data-target="#signup" className ="nav-item1 signUp" style={{textDecoration: 'none','color':'white'}} >Sign up</li>
             <li data-toggle="modal" data-target="#signin" className ="nav-item1 signin" style={{textDecoration: 'none','color':'white'}}>Signin</li>
             </>)
           }
        </ul>
   <div className="modal fade z-index" id="signin" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Sign in</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
    <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
   <br/>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
    <small id="emailHelp" className="form-text text-muted">never share your password with anyone else.</small>
  </div>
   <br/>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">remember me</label>
  </div>
  <br/>
  <a type="submit" className="btn btn-primary">Submit</a>
  </form>
  </div>

    </div>
  </div>
</div>
  <div className="modal fade z-index" id="signup" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Sign Up</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
    <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
   <br/>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
    <small id="emailHelp" className="form-text text-muted">never share your password with anyone else.</small>
  </div>
   <br/>
   <div className="form-group">
    <label htmlFor="exampleInputPassword1">Confirm password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
   </div>
  <br/>
  <a type="submit" className="btn btn-primary">Submit</a>
  </form>
  </div>

    </div>
  </div>
</div>
      </div>
      {
       courses?(<Allcourse send={send}/>):(<Selected title={title} description={description} imageurl={imageurl}/>)
      }
		</>)
}
export default Courses;