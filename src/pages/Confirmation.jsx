/**********************************************************************************/
/* Confirmation.jsx: 
/* Third step in the application.
/* @author: Elvis Goncalves
/**********************************************************************************/

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../slices/appSlice'

export default function Confirmation() { 
    
    const dispatch = useDispatch();

    // Get the user state from the redux store.
    const user = useSelector(state => state.appReducer.user);
    
    const handleBack = () => {
        window.location.href = "/more-info";
    }

    const handleSubmit = () => {
        dispatch(setLoading(true));

        // Call API to post the user information.
        fetch("http://localhost:3001/api/submit", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then((response) => {
            if (response.status !== 200) {
                window.location.href = "/error";
            } else {
                window.location.href = "/success";
            }
        });
    }

    return (
        <>
            <header>
                <h1 className="text-center">Confirmation</h1>
            </header>
            <div className="alert alert-info mt-4">
                Please verify that the following information is correct.
            </div>
            <div className="confirmation">
                <div className="row py-2">
                    <div className="col-6"><strong>First Name:</strong></div>
                    <div className="col-6">{user.name}</div>
                </div>
                <div className="row py-2">
                    <div className="col-6"><strong>E-Mail:</strong></div>
                    <div className="col-6">{user.email}</div>
                </div>
                <div className="row py-2">
                    <div className="col-6"><strong>Password:</strong></div>
                    <div className="col-6">{user.password.replace(/./g, '*')}</div>
                </div>
                <div className="row py-2">
                    <div className="col-6"><strong>Favorite Color:</strong></div>
                    <div className="col-6"><span className="text-capitalize">{user.color}</span></div>
                </div>
                <div className="row py-2">
                    <div className="col-6"><strong>Terms and Conditions:</strong></div>
                    <div className="col-6">{user.terms ? "Agreed" : "Did Not Agree"}</div>
                </div>
            </div>
            <div className="d-flex justify-content-end mt-4">
                <button type="button" className="btn btn-secondary btn-lg me-3" onClick={handleBack}>Back</button>
                <button type="button" className="btn btn-success btn-lg" onClick={handleSubmit}>Submit</button>
            </div>
        </>
    );
};