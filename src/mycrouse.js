import React ,{useState} from 'react';
import './mycrouse.scss'
import {Selecte_mycourse} from './selected_mycourse'
const Mycourse = ()=>{
  
  const [showvideo , changeshowvideo]=useState(true);
  const [title , changeTitle]= useState('title');
  const [description , changedescription]= useState('description');
  const [imageurl , changeimageurl]=useState('imageurl');
  const [id , changeid]=useState('0');

	return(<>
  {
	showvideo?(<div id="course " className="allcourse mycourse">
        <h1 className ="course text-capitalize text-center">Courses</h1>
       <div className = "showcourse row">
          <div onClick={()=>{changeshowvideo(false)}} className="card col-sm-12 col-md-6 col-lg-4 ">
        	 <div className ="courses">
       	      <div className="course-img">
       	      </div>        	 
       	       </div>
        	   <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         	  </div>
         </div>
        	 <div className="card col-sm-12 col-md-6 col-lg-4 ">
            	<div className ="courses">
            	<div className="course-img">
            	</div>
            	</div>
        		 <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         	   </div>
        	</div>
         <div className="card col-sm-12 col-md-6 col-lg-4 ">
            	<div className ="courses">
            	<div className="course-img">
            	</div>
            	</div>
        		 <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         	   </div>
        	</div>
         <div className="card col-sm-12 col-md-6 col-lg-4 ">
            	<div className ="courses">
            	<div className="course-img">
            	</div>
            	</div>
        		 <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         	   </div>
        	</div>
        	 <div className="card col-sm-12 col-md-6 col-lg-4 ">
        	  <div className ="courses">
        	  <div className="course-img">
        	  </div>
        	  </div>
        	   <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         	   </div>
        	</div>
        	 <div className="card col-sm-12 col-md-6 col-lg-4 ">
        		<div className ="courses">
        		<div className="course-img">
        		</div>
        		</div>
        		 <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         	   </div>
        	</div>
        	 <div className="card col-sm-12 col-md-6 col-lg-4 ">
        		<div className ="courses">
        		<div className="course-img">
        		</div>
        		</div>
        		 <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         	   </div>
        	</div>
        	 <div className="card col-sm-12 col-md-6 col-lg-4 ">
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
       </div>):(<><Selecte_mycourse title={title} description={description} imageurl={imageurl} id={id}/></>)
		}</>)
}

export default Mycourse;