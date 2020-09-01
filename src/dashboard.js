import React , {useEffect,useState} from 'react';
import './dashboard.scss'
import Mycourse from './mycrouse'
import {Profile} from './profile'
import {ChangePassword} from './change_password'
import profile_pic from './Photos/profile_pic.png'
import Cookies from 'universal-cookie';
const Dashboard=()=>{

   const [dashboard_content , change_dashboard_content] = useState(<Mycourse/>)
   useEffect(()=>{
      auth()
      const dashboard_link = document.getElementsByClassName('dashboard-link');
     for (let i=0; i<dashboard_link.length; i++) {
     dashboard_link[i].addEventListener('click',()=>{
          for(let j=0; j<dashboard_link.length; j++)
          {
             if(dashboard_link[j].classList.contains('dashboard-active'))
             {
                dashboard_link[j].classList.remove('dashboard-active')
             }
          };
          dashboard_link[i].classList.add('dashboard-active');
      });
     }
    
   })

  const cookies = new Cookies();
   const auth = () =>{

    let value = cookies.get('token')
    let data = {
      'token':value
    }
    if(data != {} && data != undefined){

    fetch('http://localhost:8000/api/user/authentication',{
    method:'POST',
    headers:{
    'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
})
.then(res=>{
   if(!res.ok){
     window.location.assign('/')
   }
   }).catch(e=>window.location.assign('/'))
  }

}

   const hamburger =()=>{
     const bg_dashboard = document.getElementsByClassName('bg-dashboard');
          if(bg_dashboard[0].classList.contains('bg-dashboard-show'))
          {  
             bg_dashboard[0].classList.remove('bg-dashboard-show')
          }
          else
          {
             bg_dashboard[0].classList.add('bg-dashboard-show');
          }
   }

   const logout =()=>{
     cookies.remove('token')
     window.location.assign('/')
   }

   return(
   	<>
   	<div className = "overflow">
   	  <div className="navs navs-bg nav-auto">
        <i onClick={hamburger} className="dashboard-hamburger fa fa-bars" aria-hidden="true"></i>
        <h1 className ="title text-capitalize">E-Courses</h1>
       <div className = 'logout'>
         <a onClick={logout} className="logout_">log out</a>
         <img className = "_profile_image" src={profile_pic}/>
       </div>
      </div>
      <div className="row overflow">
          <div className = "col-md-4">
          	<div className="bg-dashboard">
                <div>
                  <ul className = "dashboard-header">
                      <li><h4>Dashboard</h4></li>
                      <li><a onClick={()=>change_dashboard_content(<Mycourse/>)} className="dashboard-link dashboard-active">My Courses</a></li>
                      <li><a onClick={()=>change_dashboard_content(<Profile/>)} className="dashboard-link">Profile</a></li>
                      <li><a onClick={()=>change_dashboard_content(<ChangePassword/>)} className="dashboard-link">Change Password</a></li>
                      <li><a onClick={logout} className="dashboard-link">Log out</a></li>
                  </ul>
                </div>
          	</div>
          </div>
          <div className = "col-md-8 bg-content">
          	{dashboard_content}
          </div>
      </div>
     </div>
   	</>)
}

export default Dashboard;