import React , {useEffect , useState}from 'react';
import {Link} from 'react-router-dom';
import Store from './store'
import './selected_course.scss'
const Selected = (props)=>{

 return(
 	<>
   {
     <div className ="cours card">
      <div className ="course">
      <div className="course-img">
      </div>           
      </div>
      <div className="card-body description">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
     </div>
     <a className="submit">Buy</a>
     </div>
    }
 	</>)

 
}


export default Selected;