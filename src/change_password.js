import React from 'react';
import './change_password.scss'
import Cookies from 'universal-cookie';
export const ChangePassword = ()=>{

  const submit =()=>{
   let _oldpassword = document.getElementById('_oldpassword')
   let _password = document.getElementById('_password')
   let _confirmpassword = document.getElementById('_confirmpassword');
   if(_password.value.length > 6 && _password.value.length < 16){
     if(_password.value == _confirmpassword.value){
        const cookies = new Cookies();
        let value = cookies.get('token')
        let data = {
        'token':value,
        'password':_password.value
       }
     fetch('http://localhost:8000/api/userchangepassword',{
       method:'POST',
       headers: {
         'Content-Type':'application/json'
       },
       body:JSON.stringify(data)
     }).then(res=>{
       if(res.ok){
          alert('sucessfully Changed Password')
       }
      })
    }
   }
  }

	return(<>
           <div className = "Change_Password">
           	<form>
           	</form>
           	<label><h6>Old Password</h6></label>
           	<br/>
           	<input id='_oldpassword' type="Password" className="oldpassword"/>
           	<br/>
           	<br/>
            <label><h6>new Password</h6></label>
            <br/>
           	<input id='_password' type="Password" className="oldpassword"/>
           	<br/>
           	<br/>
           	<label><h6>Confirm Password</h6></label>
           	<br/>
           	<input id='_confirmpassword' type="Password" className="oldpassword"/>
           	<br/>
           	<br/>
           	<a onClick={submit} className="btn btn-submit">submit</a>
           </div>
		</>);
}