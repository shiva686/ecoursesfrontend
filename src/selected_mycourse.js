import React from 'react';
import './selected_mycourse.scss'
const lessions=()=>{

}
export const Selecte_mycourse =(props)=>{
	return(<div>
		 <div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3">
        	 <div className ="courses">
       	      <div className="course-img">
       	      </div>        	 
       	       </div>
        	   <div className="card-body">
               <h5 className="card-title">{props.title}</h5>
               <p className="card-text">{props.description}</p>
         	  </div>
         </div>
         <div className = 'lessions'>
          <a id ="lession1" onClick={lessions}>value</a>
          <p className="lessions1">here vido will be showed</p>
         </div>
       
		</div>)
}