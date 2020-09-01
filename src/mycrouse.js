import React ,{useState, useEffect} from 'react';
import './mycrouse.scss'
import {Selecte_mycourse} from './selected_mycourse'
import Cookies from 'universal-cookie';
const Mycourse = ()=>{
  
  const [showvideo , changeshowvideo]=useState(true);
  const [title , changeTitle]= useState('title');
  const [description , changedescription]= useState('description');
  const [imageurl , changeimageurl]=useState('imageurl');
  const [id , changeid]=useState('0');
  const [mycourse , chnage_mycourse] = useState({})
  useEffect(()=>{

    const cookies = new Cookies();
     let value = cookies.get('token')
    let data = {
      'token':value
    } 
    if(data != {} && data != undefined){
    fetch('http://localhost:8000/api/mycourse',
    {
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(res =>{
        if(res != undefined){
          chnage_mycourse(res)
        }
    }).catch(e=>console.log('something went wrong'))
  }
  },[])
	return(<>
  {
	showvideo?(<div id="course " className="allcourse mycourse">
        <h1 className ="course text-capitalize text-center">Courses</h1>
       <div className = "showcourse row">
         {
          (mycourse != undefined && mycourse != {})?(
            Object.keys(mycourse).map(value=>{
           
              return (
               <div key={value} onClick={()=>{    
               changeTitle(mycourse[value].title)
               changedescription(mycourse[value].description)
               changeimageurl(mycourse[value].image)
               changeid(mycourse[value].course_id)

               changeshowvideo(false)}
               } className="card dashboard_buyed col-md-12 col-lg-6 col-xl-4 ">
               <div className ="courses">
               <img src={mycourse[value].image} className="course-img" />           
               </div>
               <div className="card-body">
               <h5 className="card-title">{mycourse[value].title}</h5>
               <p className="card-text">{mycourse[value].shortdescription}</p>
               </div>
               </div>
               );
            })
           ):null
        }
        </div>
       </div>):(<><Selecte_mycourse title={title} description={description} imageurl={imageurl} id={id}/></>)
		}</>)
}

export default Mycourse;