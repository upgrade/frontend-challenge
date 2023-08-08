import React, { memo, useEffect, useCallback, useState } from 'react';
import { Form, Button, Input, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateSignUp, updateCachedState } from '../redux/store';

const { useForm } = Form;

const SignUp = memo(() => {
    const [form] = useForm();
    const signUp = useSelector(state => state.signUp);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const onSubmit = useCallback(
        async ({name, email, password}) => {
            dispatch(updateSignUp({name, email, password}));
            updateCachedState({signUp: {name, email, password}});
            navigate(`/more-info`);
        },
        [form]
    );

    useEffect(() => {
        form.setFieldsValue(signUp);
    }, [form, signUp])

    const clearForm = () => {
        localStorage.setItem('upgrade-state', null);
        location.reload();
    }

  return (
    <>
        <h1 style={{marginBottom: '2rem'}}>Sign Up</h1>
        <Form initialValues={{signUp}} form={form} onFinish={onSubmit}>
            <div>
                <Form.Item
                    className="input-name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter a first name' }]}
                >
                    <Input placeholder="First Name" />
                </Form.Item>
            </div>
            <div>
                <Form.Item
                    className="input-email"
                    name="email"
                    rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}
                >
                    <Input placeholder="E-Mail" />
                </Form.Item>
            </div>
            <div>
                <Form.Item
                    className="input-password"
                    name="password"
                    rules={[{ required: true, message: 'Please enter a password' }]}
                >
                    <Input.Password
                        placeholder="Password"
                        visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                    />
                </Form.Item>
            </div>
            <div>
                <Button type="primary" htmlType="submit">
                    Next
                </Button>
                <Button style={{float: 'right'}} type="primary" onClick={() => clearForm()}>
                    Clear Form
                </Button>
            </div>
        </Form>
    </>
  );
});

export default SignUp;
