/**********************************************************************************/
/* ErrorMessage.js: 
/* Displayed if the server triggered an error during the form submit.
/* @author: Elvis Goncalves
/**********************************************************************************/

import React from 'react'

export default function ErrorMessage() { 

    const handleRestart = () => {
        window.location.href = "/";
    }

    return (
        <>
            <header>
                <h1 className="text-center">Error</h1>
            </header>

            <div className="alert alert-danger mt-4">
                Uh Oh! Something went wrong. Please try again later.
            </div>
            
            <div className="d-flex justify-content-end mt-4">
                <button type="button" className="btn btn-success btn-lg" onClick={handleRestart}>Restart</button>
            </div>
        </>
    )
};