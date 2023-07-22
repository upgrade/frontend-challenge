/**********************************************************************************/
/* Page404.jsx: 
/* Displayed when a URL does not match any of the configured routes.
/* @author: Elvis Goncalves
/**********************************************************************************/

export default function Page404() {
    
    const handleRestart = () => {
        window.location.href = "/";
    }

    return (
        <>
            <img className="page-not-found mx-auto d-block" src="https://www.upgrade.com/static/not-found-c466786651193af7044562b74884c923.svg" alt="404, Page Not Found"></img>
            <h2 className="text-center mt-4">Oops! Something happened and we couldn't find your page.</h2>
            <div className="d-flex justify-content-end mt-4">
                <button type="button" className="btn btn-success btn-lg" onClick={handleRestart}>Back to Home Page</button>
            </div>
        </>
    )
};