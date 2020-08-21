import React ,{useEffect , useState}from 'react'
import './home.scss';
import About from './about'
import Contact from './contact'
import {NavLink} from 'react-router-dom';
import { Link, Element, } from 'react-scroll'
import Store ,{Dispatch}from './store'
import Selected from './selected_course';
const Home = ()=>{


const [courses , change_courses] = useState(true);
let details;
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

  const nav_item1 = document.getElementsByClassName('nav-item1')
  const active = document.getElementsByClassName('active');
    for(let i = 0; i<nav_item1.length; i++){  
        nav_item1[i].addEventListener('click' , (e)=>{ 
          if(active.length != 0){
           for(let j = 0; j<nav_item1.length; j++){
              nav_item1[j].classList.remove('active');
             }
          }
         nav_item1[i].classList.add('active');
        });
    }
    const nav = document.getElementsByClassName('navs');
    window.addEventListener('scroll' , ()=>{

      if(window.pageYOffset >= nav[0].offsetTop+500){
        nav[0].classList.add('sticky')
      }
      else{
        nav[0].classList.add('navs')

      }
     })

    details = Store.getState();
    if(details != undefined){
    change_title(details['title']);
    change_description(details['description']);
    change_imageurl(details['imageurl']);
   }
 })

 const sign =(e)=>{
   console.log(e)
 }
 const send = (imageurl ,title , description)=>{
   let payload={
     imageurl,
     title,
     description
   }
   Dispatch(payload);
  change_courses(false)
 }
 if(courses)
 {
  return (
    <div>
     <div className="bg-studied">
  <div className="navs sticky nav-auto">
      <i className="hamburger fa fa-bars" aria-hidden="true"></i>
      <h1 className ="title text-capitalize">E-Courses</h1>
     	<ul className ="nav-lists">
         <li className ="nav-item1 first-child"><Link activeClass="noth" style={{textDecoration: 'none','color':'white'}} to="home" spy={true} smooth={true} duration={500} >Home</Link></li>
         <li className ="nav-item1" href="#courses"><Link style={{textDecoration: 'none','color':'white'}} activeClass="noth" to="courses" spy={true} smooth={true} duration={500}>Courses</Link></li>
         <li className ="nav-item1"><Link activeClass="noth" style={{textDecoration: 'none','color':'white'}} to="about" spy={true} smooth={true} duration={500} >About</Link></li>
         <li className ="nav-item1"><Link activeClass="noth" style={{textDecoration: 'none','color':'white'}} to="contact" spy={true} smooth={true} duration={500}>Contact Us</Link></li>
         <li data-toggle="modal" data-target="#signup" className ="nav-item1 signUp" style={{textDecoration: 'none','color':'white'}} >Sign up</li>
         <li data-toggle="modal" data-target="#signin" className ="nav-item1 signin" style={{textDecoration: 'none','color':'white'}}>Signin</li>
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
    {/*  <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>*/}
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
    {/*  <div classNameName="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>*/}
    </div>
  </div>
</div>
       </div>
      {/* <!-- Button trigger modal -->*/}
 


{/*<!-- Modal -->*/}

        <Element name="home">
         <div className="container">
          <div>
          	<h1 className="title-center text-center">E-Courses</h1>
            <p  className="sub-title text-center">Learn digital and stay safe with dangers virus </p>
            <p  className="sub-title text-center">get stated</p>
            <div className="btn-signup">
           <a data-toggle="modal" data-target="#signup" className="signup sub-title text-center">Sign up</a>
            </div>
          </div>
         </div>
        </Element>
     </div>

     <Element name="courses">
      <div id="course">
        <h1 className ="course text-capitalize text-center">Courses We Offer</h1>
       <div className = "showcourse row">
          <div onClick={()=>send('imageurl','title','description')} className="card col-sm-12 col-md-6 col-lg-4 col-xl-3">
        	 <div className ="courses">
       	      <div className="course-img">
       	      </div>        	 
       	       </div>
        	   <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         	  </div>
         </div>
        	 <div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3">
            	<div className ="courses">
            	<div className="course-img">
            	</div>
            	</div>
        		 <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         	   </div>
        	</div>
         <div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3">
            	<div className ="courses">
            	<div className="course-img">
            	</div>
            	</div>
        		 <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         	   </div>
        	</div>
         <div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3">
            	<div className ="courses">
            	<div className="course-img">
            	</div>
            	</div>
        		 <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         	   </div>
        	</div>
        	 <div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3">
        	  <div className ="courses">
        	  <div className="course-img">
        	  </div>
        	  </div>
        	   <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         	   </div>
        	</div>
        	 <div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3">
        		<div className ="courses">
        		<div className="course-img">
        		</div>
        		</div>
        		 <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         	   </div>
        	</div>
        	 <div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3">
        		<div className ="courses">
        		<div className="course-img">
        		</div>
        		</div>
        		 <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         	   </div>
        	</div>
        	 <div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3">
        		<div className ="courses">
        		<div className="course-img">
        		</div>
        		</div>
        		 <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         	   </div>
        	</div>
        </div>
        <div className ="seeall">
          <NavLink to='/Course' style={{'textDecoration':'none', 'color':'white'}} className="see_all">See all</NavLink>
        </div>
       </div>
     </Element>
     <Element name="about">
      <About/>
     </Element>
     <Element name="contact">
      <Contact/>
      </Element>
    </div>
  );
  }
  else{
    return(<>
      <div className="navs navs-co nav-auto">
      <i className="hamburger fa fa-bars" aria-hidden="true"></i>
      <h1 className ="title text-capitalize">E-Courses</h1>
       <ul className ="nav-lists">
         <li className ="nav-item1 first-child"><Link style={{textDecoration: 'none','color':'white'}} to="home"  >Home</Link></li>
         <li className ="nav-item1" onClick={()=> change_courses(true)} href="#courses">Courses</li>
         <li className ="nav-item1"><Link style={{textDecoration: 'none','color':'white'}} to="about">About</Link></li>
         <li className ="nav-item1"><Link style={{textDecoration: 'none','color':'white'}} to="contact">Contact Us</Link></li>
         <li data-toggle="modal" data-target="#signup" className ="nav-item1 signUp" style={{textDecoration: 'none','color':'white'}} >Sign up</li>
         <li data-toggle="modal" data-target="#signin" className ="nav-item1 signin">Signin</li>
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
      <Selected title={title} description={description} imageurl={imageurl}/>)
      </>)
  }
}

export default Home;