import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import axios from 'axios';
import Select from '../../atoms/select/Select';
import Checkbox from '../../atoms/checkbox/Checkbox';
import { SignUpContext, SignUpDispatch } from '../../context/signUpContext';
import { AdditionalInfoSchema } from '../../schema';

export default function AdditionalInfo() {
    const navigate = useNavigate();
    const signUpInfo = useContext(SignUpContext);
    const dispatch = useContext(SignUpDispatch);
    const [colorList, setColorList] = useState([]);
    const [isLoading, setLoading] = useState(false);

    function onSubmit(data) {
        dispatch({
            type: 'saved',
            signUpInfo: {
                favoriteColor: data.favoriteColor,
                terms: data.terms
            }
        });
        navigate('/confirmation');  
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await axios('http://localhost:3001/api/colors');
                setColorList(result.data);
            } catch (error) {
                console.log('error fetching colors api: ', error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <h1>Additional Info</h1>
            <Formik
                initialValues={{
                    favoriteColor: signUpInfo.favoriteColor,
                    terms: signUpInfo.terms
                }}
                validationSchema={AdditionalInfoSchema}
                onSubmit={onSubmit}
            >
                {() => (
                    <Form>
                        {isLoading
                            ? (<div className="spinner"></div>)
                            : (
                                <>
                                    <Select
                                        name="favoriteColor"
                                    >
                                        <option value="">Select your favorite color</option>
                                        {colorList.map((color, index) => (
                                            <option key={index} value={color}>{color}</option>
                                        ))}
                                    </Select>
                                    <Checkbox
                                        type="checkbox"
                                        name="terms"
                                    />
                                    <div className="buttons-section">
                                        <button
                                            onClick={() => navigate('/')}
                                        >
                                            Back
                                        </button>
                                        <button
                                            disabled={isLoading}
                                            type="submit"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </>
                            )
                        }
                    </Form>
                )}
            </Formik>
        </>
    )
}
