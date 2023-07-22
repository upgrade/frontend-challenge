/**********************************************************************************/
/* SuccessMessage.jsx: 
/* Displayed if the submit of the form is succesful.
/* @author: Elvis Goncalves
/**********************************************************************************/

import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../slices/appSlice'

export default function SuccessMessage() { 

    const dispatch = useDispatch();

    const handleRestart = () => {
        // Reset the user state to a blank user in the redux store.
        dispatch(setUser({name: "", email: "", password: "", color: "", terms: false}));
        window.location.href = "/";
    }

    return (
        <>
            <header>
                <h1 className="text-center">Success</h1>
            </header>
            <div className="alert alert-success mt-4">
                You should receive a confirmation email soon.
            </div>
            <div className="d-flex justify-content-end mt-4">
                <button type="button" className="btn btn-success btn-lg" onClick={handleRestart}>Restart</button>
            </div>
        </>
    )
};