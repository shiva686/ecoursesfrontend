import React from 'react';
import './change_password.scss'
export const ChangePassword = ()=>{
	return(<>
           <div className = "Change_Password">
           	<form>
           	</form>
           	<label><h6>Old Password</h6></label>
           	<br/>
           	<input type="Password" className="oldpassword"/>
           	<br/>
           	<br/>
            <label><h6>new Password</h6></label>
            <br/>
           	<input type="Password" className="oldpassword"/>
           	<br/>
           	<br/>
           	<label><h6>Confirm Password</h6></label>
           	<br/>
           	<input type="Password" className="oldpassword"/>
           	<br/>
           	<br/>
           	<a className="btn btn-submit">submit</a>
           </div>
		</>);
}