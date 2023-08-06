import React, { memo, useCallback } from 'react';
import { Form, Button, Input, Row, Col } from 'antd';

const { useForm } = Form;

const SignUp = memo(() => {
    const [form] = useForm();

    const onSubmit = useCallback(
        async ({firstName, email, password}) => {
            console.log(`${firstName}, ${email}, ${password}`);
        },
        [form]
    );

  return (
    <Form form={form} layout="inline" onFinish={onSubmit}>
        <Row>
            <Col span={24}>
                <Form.Item
                    className="input-first-name"
                    name="firstName"
                    rules={[{ required: true, message: 'Please enter a first name' }]}
                >
                    <Input placeholder="First Name" />
                </Form.Item>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Form.Item
                    className="input-email"
                    name="email"
                    rules={[{ required: true, message: 'Please enter an email address' }]}
                >
                    <Input placeholder="E-Mail" />
                </Form.Item>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Form.Item
                    className="input-password"
                    name="password"
                    rules={[{ required: true, message: 'Please enter a password' }]}
                >
                    <Input placeholder="Password" />
                </Form.Item>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Button type="primary" htmlType="submit">
                    Next
                </Button>
            </Col>
        </Row>
    </Form>
  );
});

export default SignUp;
