/**********************************************************************************/
/* AdditionalInfo.jsx: 
/* Second step in the application.
/* @author: Elvis Goncalves
/**********************************************************************************/

import React, { useEffect, useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { setColors, setLoading, setUser } from '../slices/appSlice'
import classNames from "classnames";

export default function AdditionalInfo() { 
    
    const dispatch = useDispatch();
    
    // Get the user state from the redux store
    const user = useSelector(state => state.appReducer.user);

    // Initialize the react-hook-form methods. Will be used to validate the form. 
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
          favoriteColor: user.color
        }
    });
    
    // Get the colors state from the redux store. We could've kept it as a local state
    // but i wanted to keep all the localStorage interaction in the slice.
    const colors = useSelector(state => state.appReducer.colors);
    
    // Initialize the state variables
    const [modal, setModal] = useState(false);

    // To toggle the terms and condition modal
    const toggleTermsConditions = () => setModal(!modal);

    const handleBack = (formData) => {
        // Dispatch the user information to the redux store via the setUser action to set the favorite color and terms.
        dispatch(setUser({...user, color: formData.favoriteColor, terms: formData.terms}));
        // Redirect to first step.
        window.location.href = "/";
    }

    const submitForm = (formData) => {
        // Dispatch the user information to the redux store via the setUser action to set the favorite color and terms.
        dispatch(setUser({...user, color: formData.favoriteColor, terms: formData.terms}));
        // Redirect to confirmation step.
        window.location.href = "/confirmation";
    };

    /**********************************************************************************/
    /* Defining the useEffect hook to fetch the color list
    /**********************************************************************************/
    useEffect(() => {
        // Do not call the API if we already have the color list.
        if (colors.length === 0) {
            dispatch(setLoading(true));

            // Fetch the colors from the API call.
            fetch("http://localhost:3001/api/colors", {
                redirect: 'follow',
                method: 'GET'
            })
            .then(response => {
                return response.json()
            })
            .then(data => {
                dispatch(setColors(data));
                dispatch(setLoading(false));
            });
        }
    }, []);

    return (
        <>
            <header>
                <h1 className="text-center">Additional Info</h1>
            </header>
            <form onSubmit={handleSubmit(submitForm)} noValidate autoComplete="off" className="mt-4">
                <div className="form-group my-3">
                    <div className="position-relative">
                        <select className={classNames({"form-select form-select-lg text-capitalize mb-1": true, "error": errors.favoriteColor, "has-data": watch("favoriteColor")?.length > 0})} 
                                {...register("favoriteColor", { required: true })} defaultValue={user.color}>
                            <option hidden="hidden" value=""></option>
                            {colors.map((color, index) => {
                                    return <option key={"color-" + index} className="text-capitalize" value={color}>{color}</option>
                                })}
                        </select>
                        <span className="placeholder-label">Select your favorite color</span>
                    </div>
                    {errors.favoriteColor && <p className="text-danger">The Favorite Color field is required</p>}
                </div>
                <div className="form-group position-relative my-3">
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" 
                                   defaultChecked={user.terms}
                                   {...register("terms", { required: true })}  />
                            <span className={classNames({"checkbox": true, "error": errors.terms})}></span>
                            <span className="d-flex align-items-center">
                                I agree to the <a href="#" className="ps-1" onClick={toggleTermsConditions}>terms and conditions</a>
                            </span>
                        </label>
                    </div>
                    {errors.terms && <p className="text-danger">You must agree to the Terms and Conditions.</p>}
                </div>
                <div className="d-flex justify-content-end mt-4">
                    <button type="button" className="btn btn-secondary btn-lg me-3" onClick={handleSubmit(handleBack)}>Back</button>
                    <button type="submit" className="btn btn-success btn-lg">Next</button>
                </div>
            </form>
            <Modal isOpen={modal} toggle={toggleTermsConditions}>
                <ModalHeader toggle={toggleTermsConditions}>
                    Terms and Conditions
                </ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </ModalBody>
                <ModalFooter>
                    <button type="button" className="btn btn-success btn-lg" onClick={toggleTermsConditions}>
                        Close
                    </button>
                </ModalFooter>
            </Modal>
        </>
    );
};