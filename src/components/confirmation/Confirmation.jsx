import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SignUpContext } from '../../context/signUpContext';

export default function Confirmation() {
    const navigate = useNavigate();
    const signUpInfo = useContext(SignUpContext);
    const [isSubmitting, setSubmitting] = useState(false);

    async function handleSubmitForm() {
        try {
            setSubmitting(true);
            const response = await axios({
                method: 'post',
                url: 'http://localhost:3001/api/submit',
                data: {
                    name: signUpInfo.name,
                    email: signUpInfo.email,
                    password: signUpInfo.password,
                    color: signUpInfo.favoriteColor,
                    terms: signUpInfo.terms
                }
            });
            if (response && response.status === 200) {
                navigate('/success', { state: 'success'});
            } else {
                navigate('/error', { state: 'error' });
            }
        } catch (error) {
            console.log('error submitting sign up form: ', error);
            navigate('/error', { state: 'error' });
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <section className="form-section">
            <h1>Confirmation</h1>
            <li>First Name: {signUpInfo.name}</li>
            <li>E-mail: {signUpInfo.email}</li>
            <li>Password: *****</li>
            <li>Favorite color: {signUpInfo.favoriteColor}</li>
            <li>Terms and conditions: {signUpInfo.terms ? "Agreed" : "Disagreed"}</li>
            <div className="buttons-section">
                <button
                    onClick={() => navigate('/more-info')}
                >
                    Back
                </button>
                <button
                    disabled={isSubmitting}
                    onClick={handleSubmitForm}
                >
                    Submit
                    {isSubmitting ? (<span className="button-spinner"></span>) : ''}
                </button>
            </div>
        </section>
    )
}
