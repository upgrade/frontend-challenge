import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SuccessStatus from '../../atoms/status/SuccessStatus';
import ErrorStatus from '../../atoms/status/ErrorStatus';
import { SignUpDispatch } from '../../context/signUpContext';

export default function StatusPage() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const dispatch = useContext(SignUpDispatch);

    return (
        <section className="form-section">
            {state === 'success'
                ? (<SuccessStatus />)
                : (<ErrorStatus />)
            }
            <div className="buttons-section">
                <button
                    onClick={() => {
                        dispatch({
                            type: 'reset'
                        })
                        navigate('/')
                    }}
                >
                    Restart
                </button>
            </div>
        </section>
    )
}
