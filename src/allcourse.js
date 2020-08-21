import React from 'react';
import {Link } from 'react-router-dom';
import {Element} from 'react-scroll';
import Store ,{Dispatch}from './store'
import Selected from './selected_course';

export const Allcourse = (props)=>{

  return(
     <Element name="courses">
      <div id="course " className="allcourse">
        <h1 className ="course text-capitalize text-center">Courses</h1>
       <div className = "showcourse row">
          <div onClick={()=>props.send('imageurl','title','Some quick example text to build on the card title and make up the bulk of the cards content.')} className="card col-sm-12 col-md-6 col-lg-4 col-xl-3">
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
       </div>
     </Element>
   );
}