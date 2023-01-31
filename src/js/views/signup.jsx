import React, {useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import {Navigate} from "react-router-dom"
import PropTypes from "prop-types";

export const Signup = () => {
	const { store, actions } = useContext(Context);
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[firstname,setFirstname]=useState("")
    const[lastname,setLastname]=useState("")
    const[email,setEmail]=useState("")
    //
    


	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);


    function signup(e){
        e.preventDefault()
        if (firstname != "" && lastname != "" && email != "" && username != "" && password != "") {
        actions.signupUser(firstname, lastname, email, username, password)
        setFirstname("")
        setLastname("")
        setEmail("")
        setUsername("")
        setPassword("")
        } else {
            alert("Faltan datos por completar")
        }
    }

    

    return (
		<div className="container w-50 text-white mb-5">
                        <h1 className="text-center text-danger border-bottom border-danger">SIGN UP</h1>

{store.auth === true ? <Navigate to="/"/>:
             <form onSubmit={signup}>
                <div className="form-group row">
             <div className="col-md-6 mb-3">
     <label htmlFor="firstname" className="form-label">First name</label>
     <input type="text" className="form-control"  value={firstname} onChange={(e)=>setFirstname(e.target.value)} id="firstname" aria-describedby="emailHelp"/>
   </div>
   <div className="col-md-6 mb-3">
     <label htmlFor="lastname" className="form-label">last name</label>
     <input type="text" className="form-control" value={lastname} onChange={(e)=>setLastname(e.target.value)} id="lastname" aria-describedby="emailHelp"/>

   </div>

   </div>
   <div className="mb-3">
     <label htmlFor="email" className="form-label">Email address</label>
     <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" aria-describedby="emailHelp"/>

   </div>
 
   <div className="form-group row"> 
   <div className="col-md-6 mb-3">
     <label htmlFor="username" className="form-label">Username</label>
     <input type="text" className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)} id="username" aria-describedby="emailHelp"/>

   </div>
 
   <div className="col-md-6 mb-3">
     <label htmlFor="password" className="form-label">Password</label>
     <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} id="password"/>

   </div>

   </div>

   <div className="d-grid gap-2 col-6 mx-auto">
   <button type="submit" className="btn btn-lg btn-danger">Submit</button>

   </div>
 
 </form>
}
</div>
	);

};


Signup.propTypes = {
	match: PropTypes.object
};
