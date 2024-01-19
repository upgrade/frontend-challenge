/**********************************************************************************/
/* SignUp.jsx: 
/* First step in the application.
/* @author: Elvis Goncalves
/**********************************************************************************/

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../slices/appSlice'
import { useForm } from "react-hook-form";
import classNames from "classnames";

export default function SignUp() { 

    const dispatch = useDispatch();

    // Get the user state from the redux store
    const user = useSelector(state => state.appReducer.user);

    // Initialize the react-hook-form methods. Will be used to validate the form. 
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
          firstName: user.name,
          email: user.email,
          password: user.password
        }
    });
    
    const submitForm = (formData) => {
        // Dispatch the user information to the redux store via the setUser action and set the name, email and password.
        dispatch(setUser({...user, name: formData.firstName.trim(), email: formData.email, password: formData.password}));
        // Redirect to /more-info page
        window.location.href = "/more-info";
    }

    return (
        <>
            <header>
                <h1 className="text-center">Sign Up</h1>
            </header>
            <form onSubmit={handleSubmit(submitForm)} noValidate autoComplete="off" className="mt-4">
                <div className="form-group my-3">
                    <div className="position-relative">
                        <input type="text" 
                            autoFocus
                            className={classNames({"form-control form-control-lg mb-1": true, "error": errors.firstName, "has-data": watch("firstName")?.length > 0})}
                            defaultValue={user.name} 
                            maxLength="50"
                            {...register("firstName", { required: true })} 
                        />
                        <span className="placeholder-label">First Name</span>
                    </div>
                    {errors.firstName && <p className="text-danger">The First Name field is required.</p>}
                </div>
                <div className="form-group my-3">
                    <div className="position-relative">
                        <input type="text" 
                            className={classNames({"form-control form-control-lg mb-1": true, "error": errors.email, "has-data": watch("email")?.length > 0})} 
                            defaultValue={user.email} 
                            maxLength="100"
                            {...register("email", { required: true, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i} })} 
                        />
                        <span className="placeholder-label">E-mail</span>
                    </div>
                    {errors.email?.type === 'required' && <p className="text-danger">The E-mail field is required.</p>}
                    {errors.email?.type === 'pattern' && <p className="text-danger">The E-mail format is invalid. (Ex: simple@example.com)</p>}
                </div>
                <div className="form-group my-3">
                    <div className="position-relative">
                        <input type="password" 
                            className={classNames({"form-control form-control-lg mb-1": true, "error": errors.password, "has-data": watch("password")?.length > 0})} 
                            defaultValue={user.password} 
                            maxLength="50"
                            {...register("password", { required: true })} 
                        />
                        <span className="placeholder-label">Password</span>
                    </div>
                    {errors.password && <p className="text-danger">The Password field is required.</p>}
                </div>
                <div className="d-flex justify-content-end mt-4">
                    <button type="submit" className="btn btn-success btn-lg">Next</button>
                </div>
            </form>
        </>
    )
};