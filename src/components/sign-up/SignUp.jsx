import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import Input from '../../atoms/input/Input';
import { SignUpContext, SignUpDispatch } from '../../context/signUpContext';
import { SignUpSchema } from '../../schema';

export default function SignUp() {
    const navigate = useNavigate();
    const signUpInfo = useContext(SignUpContext);
    const dispatch = useContext(SignUpDispatch);

    function onSubmit(data) {
        dispatch({
            type: 'saved',
            signUpInfo: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        });
        navigate('/more-info');
    }

    return (
        <>
            <h1>Sign up</h1>
            <Formik
                initialValues={{
                    name: signUpInfo.name,
                    email: signUpInfo.email,
                    password: signUpInfo.password
                }}
                validationSchema={SignUpSchema}
                onSubmit={onSubmit}
            >
                {() => (
                    <Form>
                        <Input
                            name="name"
                            type="text"
                            placeholder="First name"
                        />
                        <Input
                            name="email"
                            type="text"
                            placeholder="e-mail"
                        />
                        <Input
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                        <div className="buttons-section">
                            <button type="submit">Next</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}
