import React from 'react';
import './selected_mycourse.scss'

export const Selecte_mycourse =(props)=>{
	return(<div>
		 <div className="mycour col-xl-12">
        	 <div className ="courses">
       	      <img src={props.imageurl} className="course-img"/>        	 
       	       </div>
        	   <div className="card-body">
               <h5 className="card-title">{props.title}</h5>
               <p className="card-text">{props.description}</p>
         	  </div>
         </div>
         <div className = 'lessions'>
        
          <p className="lessions1">here vido will be showed</p>
         </div>
       
		</div>)
}