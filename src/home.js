import React ,{useEffect , useState}from 'react'
import './home.scss';
import About from './about'
import Contact from './contact'
import {NavLink} from 'react-router-dom';
import { Link, Element, } from 'react-scroll'
import Store ,{Dispatch}from './store'
import Selected from './selected_course';
import Cookies from 'universal-cookie';
const Home = ()=>{

const cookies = new Cookies();
const [courses , change_courses] = useState(true);
const [websitedetails , change_web] = useState({"websitename":"E-Coureses","aboutwebsite":"we established this company to make digital the world and share the knowledge at low price with compare to others and there is no risk of virus beacuse your will study in in online and you can learn anywhere and any time"});
let details;
const [title , change_title] = useState('')
const [stu_id ,change_id] = useState('')
const [description , change_description] = useState('')
const [imageurl , change_imageurl] = useState('')
const [login , notlogin]=useState(false)
const [courses_list , addcourse]=useState({})



 useEffect(()=>{
details = Store.getState();
    if(details != undefined){
    change_title(details['title']);
    change_description(details['description']);
    change_imageurl(details['imageurl']);
    change_id(details['id'])
   }
 })
 useEffect(()=>{

    
     let value = cookies.get('token')
     let data = {
      'token':value
    }

    fetch('http://localhost:8000/api/user/authentication',{
    method:'POST',
    headers:{
    'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
    }).then(res=>{
      if(res.ok){
        notlogin(true)
      }
    })
    

    fetch('http://localhost:8000/api/websitedetails').then(res=>{
       if(res.ok){return res.json()}
    }).then(res => change_web(res))
     

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



   


fetch('http://localhost:8000/api/admin/homecourses')
.then(res=>{
       if(res.ok){
         return res.json()
       }else{
         alert('something went wrong')
       }
    }).then(res=>{
      if(res != undefined){
        addcourse(res);
      }
    })



 },[])



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














const signup = ()=>{
  let input_signup_name = document.getElementsByClassName('input_signup_name')
  let signup_email = document.getElementsByClassName('input_signup_email')
  let input_signup_password = document.getElementsByClassName('input_signup_password')
  let input_signup_comfirmpassword = document.getElementsByClassName('input_signup_comfirmpassword')
  let email = signup_email[0].value.toString()
  if(input_signup_name[0].value != '' && input_signup_password[0].value.length > 6 && email.includes('@') && email.length > 10)
  {
    if(input_signup_password[0].value == input_signup_comfirmpassword[0].value){

      let data = {
        'name':input_signup_name[0].value,
        'email':email,
        'password':input_signup_password[0].value
      }

      fetch('http://localhost:8000/api/usersignup',{
         method:'POST',
         headers:{
           'Content-Type':'application/json'
         },
         body:JSON.stringify(data)
       }).then(res=>{
         if(res.ok){
           return res.json()
         }else{
           alert('something went wrong')
         }
      }).then(res =>{
         if(res != undefined){
           cookies.set('token',res , { path: 'http://localhost:3000/' });
           window.location.assign('/dashboard')
         }
      })
    }
  }
}







const show_dashboard =()=>{
   window.location.assign('/dashboard')
}






const signin = ()=>{
  let input_signin_email = document.getElementsByClassName('input_signin_email')
  let input_signin_password = document.getElementsByClassName('input_signin_password')
  if(input_signin_email[0].value != '' && input_signin_password[0].value != '')
  {
    let data ={
      'email':input_signin_email[0].value.toString(),
      'password':input_signin_password[0].value.toString()
    }
    fetch('http://localhost:8000/api/usersignin',
    {
     method:'POST',
         headers:{
           'Content-Type':'application/json'
         },
         body:JSON.stringify(data)
    }).then(res=>{
      if(res.ok){
        return res.json()
      }else{
        alert('something went wrong')
      }
    }).then(res=>{
      if(res != undefined){
        cookies.set('token',res , { path: 'http://localhost:3000/' });
        window.location.assign('/dashboard')
      }
    })
  }

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
    <input type="email" className="form-control input_signin_email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
   <br/>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control input_signin_password "/>
    <small id="emailHelp" className="form-text text-muted">never share your password with anyone else.</small>
  </div>
   <br/>
  <div className="form-group form-check">
  </div>
  <br/>
  <a onClick={signin} type="submit" className="btn btn-primary button_signin">Submit</a>
  </form>
  </div>
  </div>
  </div>
</div>

  {/**/}

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
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control input_signup_name"/>
   
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control input_signup_email" aria-describedby="emailHelp"/>
   
  </div>
   <br/>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control input_signup_password"/>
    <small id="emailHelp" className="form-text text-muted">never share your password with anyone else.</small>
  </div>
    <div className="form-group">
    <label htmlFor="exampleInputPassword1">Confirm password</label>
    <input type="password" className="form-control input_signup_comfirmpassword"/>
    <small id="emailHelp" className="form-text text-muted">never share your password with anyone else.</small>
  </div>
   <br/>
   <div className="form-group">
   </div>
  <br/>
  <a onClick={signup} type="submit" className="btn btn-primary button_signup">Submit</a>
  </form>
  </div>
    </div>
  </div>
  </div>

</div>
      

        <Element name="home">
         <div className="container">
          <div>
          	<h1 className="title-center text-center">E-Courses</h1>
            <p  className="sub-title text-center">Learn digital and stay safe with dangers virus </p>
            <p  className="sub-title text-center">get stated</p>
            <div className="btn-signup">
          { !login?(<a data-toggle="modal" data-target="#signup" className="signup sub-title text-center">Sign up</a>):null}  </div>
          </div>
         </div>
        </Element>
     </div>

     <Element name="courses">
      <div id="course">
        <h1 className ="course text-capitalize text-center">Courses We Offer</h1>
       <div className = "showcourse row">
       {
         
         (courses_list != undefined && courses_list != {})?(
            Object.keys(courses_list).map(value=>{
              if(courses_list[value].title == 'first'){
                return null;
              }
              return(<div key={value} onClick={()=>{send(courses_list[value].id,courses_list[value].image,courses_list[value].title , courses_list[value].description)}} className="card col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className ="courses">
                <img src ={courses_list[value].image} className="course-img"/>
                </div>
                <div className="card-body">
                <h5 className="card-title">{courses_list[value].title}</h5>
                <p className="card-text">{courses_list[value].shortdescription}</p>
                </div>
              </div>)
            })
            ):null
         }
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
         <li className ="nav-item1 first-child"><Link style={{textDecoration: 'none','color':'white'}} to="home">Home</Link></li>
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
      <Selected id={stu_id} title={title} description={description} imageurl={imageurl}/>
      </>)
  }
}

export default Home;