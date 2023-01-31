import React, {useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import {Navigate} from "react-router-dom"
import PropTypes from "prop-types";

export const Login = () => {
	const { store, actions } = useContext(Context);
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")

	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);
    
    function login(e){
        e.preventDefault()
        actions.loginUser(username, password)
    }
    

    return (
		<div className="container w-50 text-white mb-5">
            <h1 className="text-center text-danger border-bottom border-danger">LOG IN</h1>
{store.auth === true ? <Navigate to="/"/>:
            <form onSubmit={login}>

        <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)} id="username" aria-describedby="emailHelp"/>
        </div>

        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} id="password"/>
        </div>

        <div className="d-grid gap-2 col-6 mx-auto">
   <button type="submit" className="btn btn-lg btn-danger">Submit</button>

   </div>
        </form>
}
</div>
	);

};


Login.propTypes = {
	match: PropTypes.object
};
