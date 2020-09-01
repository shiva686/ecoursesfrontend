import React ,{useEffect,useState} from 'react';
import {Link } from 'react-router-dom';
import {Element} from 'react-scroll';
import Store ,{Dispatch}from './store'
import Selected from './selected_course';

export const Allcourse = (props)=>{

const [courses_list , addcourse]=useState({})

useEffect(()=>{


fetch('http://localhost:8000/api/admin/courses')
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


})
  return(
     <Element name="courses">
      <div id="course " className="allcourse">
        <h1 className ="course text-capitalize text-center">Courses</h1>
       <div className = "showcourse row">
       {
         (courses_list !={} && courses_list != undefined)?(
         Object.keys(courses_list).map((value)=>{

            if(courses_list[value].title == 'first'){
                return null;
              }
              
           return(<div key={value} onClick={()=>props.send(courses_list[value].id ,courses_list[value].image, courses_list[value].title , courses_list[value].description)} className="card col-sm-12 col-md-6 col-lg-4 col-xl-3">
               <div className ="courses">
               <img src={courses_list[value].image} className="course-img"/>           
               </div>
               <div className="card-body">
               <h5 className="card-title">{courses_list[value].title}</h5>
               <p className="card-text">{courses_list[value].description}</p>
             </div>
         </div>)
         })
          ):null
      }

        </div>
       </div>
     </Element>
   );
}