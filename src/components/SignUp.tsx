import React, { memo, useCallback } from 'react';
import { Form, Button, Input, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateSignUp } from '../redux/store';

const { useForm } = Form;

const SignUp = memo(() => {
    const [form] = useForm();
    const upgradeStore = useSelector(state => state.signUp);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = useCallback(
        async ({name, email, password}) => {
            dispatch(updateSignUp({name, email, password}));
            navigate(`/more-info`);
        },
        [form]
    );

  return (
    <>
        <h1 style={{marginBottom: '2rem'}}>Sign Up</h1>
        <Form form={form} onFinish={onSubmit}>
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
                    rules={[{ required: true, message: 'Please enter an email address' }]}
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
                    <Input placeholder="Password" />
                </Form.Item>
            </div>
            <div>
                <Button type="primary" htmlType="submit">
                    Next
                </Button>
            </div>
        </Form>
    </>
  );
});

export default SignUp;
