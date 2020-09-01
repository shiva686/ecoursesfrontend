import React ,{useState,useEffect}from 'react';
import profile_pic from './Photos/profile_pic.png'
import './profile.scss'
import Cookies from 'universal-cookie';
export const Profile = ()=>{
  
   const [pic , change_pic]=useState(profile_pic)
   const [input_value , change_input_value]=useState(false)
   const [profile, changeprofile]=useState({stu_id:"1234",name:"name",email:"email"})
   const profile_click = ()=>{
   const file = document.getElementsByClassName('file');
   file[0].click();
   file[0].addEventListener('change',(e)=>{
         let file = e.target.files[0]
      const result = new FileReader()
       result.readAsDataURL(file)
      result.addEventListener('load', ()=>{
      	change_pic(result.result);
      })
   });
  }
  const cookies = new Cookies();
   let value = cookies.get('token')
     let data = {
      'token':value
    }
  useEffect(()=>{
    fetch('http://localhost:8000/api/profile',
    {
      method:'POST',
      headers: {
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
         changeprofile(res)
    })
  },[])
	return(
		<>
		<div className ="row profile_">
		 <div className = "col-md-6 profile_img">
		  <img onClick={profile_click} className = "profile_pic" src ={pic}/>
		  <input className="file" type="file" />
		 </div>
		  <div className = "col-md-6 profile_data">
		  <div className = "stu_profile">
           <p className = "stu_id">Student Id :</p>
           <p className = "id">{profile.stu_id}</p>
          </div> 
          <div className = "flex">
           <p className = "stu_id">Name:</p>
           <p className = "name">{profile.name}</p>
          </div>
           <div className = "flex">
           <p className = "stu_id">Email:</p>
           <p className = "email">{profile.email}</p>
          </div>
		  </div>
		</div>
		</>)
}