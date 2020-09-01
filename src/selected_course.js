import React , {useEffect , useState}from 'react';
import {Link} from 'react-router-dom';
import Store from './store'
import './selected_course.scss'
const Selected = (props)=>{

let details;
const [stu_id ,change_id] = useState('')
const [title , change_title] = useState('')
const [description , change_description] = useState('')
const [imageurl , change_imageurl] = useState('')

useEffect(()=>{
   details = Store.getState();
    if(details != undefined){
    change_title(details['title']);
    change_description(details['description']);
    change_imageurl(details['imageurl']);
    change_id(details['id'])
    }

})
let id = props.id
const submit=()=>{

  let token = document.cookie;
  let cookiearray = token.split(';');
  let length = cookiearray.length
  let value;
  for (let i=0; i<length; i++)
  {
  let name = cookiearray[i].split('=')[0];
     if(name == 'token'){
     value = cookiearray[i].split('=')[1];
     } 
  }
  let data = {
   'token':value,
   'courseid':id
  }
  fetch('http://localhost:8000/api/buycourse',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  }).then(res=>{
    if(res.ok){
      alert('thank you for buying this course')
    }
    else{
      alert('signup to buy')
    }
  }).catch(err =>{
     alert('already you owned')
  })
}

 return(
 	<>
   {
     <div className='selected__' >
      <div className ="course">
      <img src={imageurl} className="course-img"/>           
      </div>
      <div className="card-body description">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
     </div>
     <a onClick={submit} className="submit">Buy</a>
     </div>
     
    }
 	</>)
}


export default Selected;