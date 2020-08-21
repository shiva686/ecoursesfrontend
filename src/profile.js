import React ,{useState}from 'react';
import profile_pic from './Photos/profile_pic.png'
import './profile.scss'
export const Profile = ()=>{
  
   const [pic , change_pic]=useState(profile_pic)
   const [input_value , change_input_value]=useState(false)
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
           <p className = "id">123456789</p>
          </div> 
          <div className = "flex">
           <p className = "stu_id">Name:</p>
           <p className = "name">Shiva</p>
          </div>
           <div className = "flex">
           <p className = "stu_id">Email:</p>
           <p className = "email">smartwebtechno898@gmail.com</p>
          </div>
		  </div>
		</div>
		</>)
}