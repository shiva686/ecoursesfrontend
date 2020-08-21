import {createStore } from 'redux';

 
 const reducer = (state , action)=>{
    switch(action.type)
    {
    	case 'Update':
    	      return action.payload;
    	  break; 
    	default :
    	    return state;
    }
}


let Store = createStore(reducer);

export default Store;
export const Dispatch = (payload)=>(Store.dispatch({type:"Update",payload}));
