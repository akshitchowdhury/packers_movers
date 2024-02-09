import React from 'react';
import { Card, Form, Input, Button } from 'antd'; // Assuming you're using Ant Design components
import MapLeaflet from '../Map/MapLeaflet'; // Import your MapLeaflet component

const InquiryForm = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="inquiry_form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email Address"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please enter a valid email address!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: 'Please input your message!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[
          { required: true, message: 'Please input your phone number!' },
          { pattern: /^\d{10}$/, message: 'Please enter a valid phone number!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const InquiryAndMapComponent = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Card style={{ flex: 1, marginRight: '1rem', maxHeight: '500px' }}> {/* Adjust the max-height as per your requirement */}
        <h2>Inquiry Form</h2>
        <InquiryForm />
      </Card>
      <Card style={{ flex: 1, maxHeight: '500px' }}> {/* Adjust the max-height as per your requirement */}
        <h2>Map</h2>
        <MapLeaflet />
      </Card>
    </div>
  );
};

export default InquiryAndMapComponent;
