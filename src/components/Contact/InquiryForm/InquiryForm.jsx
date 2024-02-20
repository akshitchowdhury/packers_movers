import React, { useState } from 'react';
import { Card, Form, Input, Button } from 'antd'; // Assuming you're using Ant Design components
import MapLeaflet from '../Map/MapLeaflet'; // Import your MapLeaflet component
import './InquiryForm.css'
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
      className="form-title"
    >
      <Form.Item
        
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input className='enter-name' />
      </Form.Item>

      <Form.Item
      
        label="Email Address"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please enter a valid email address!' },
        ]}
      >
        <Input className='enter-email' />
      </Form.Item>

      <Form.Item
      
        label="Message"
        name="message"
        rules={[{ required: true, message: 'Please input your message!' }]}
      >
        <Input.TextArea className='enter-message' />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[
          { required: true, message: 'Please input your phone number!' },
          { pattern: /^\d{10}$/, message: 'Please enter a valid phone number!' },
        ]}
      >
        <Input className='enter-phone'/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          <h2 className='text-center text-black text-l mb-6'>Submit</h2>
        </Button>
      </Form.Item>
    </Form>
  );
};

const InquiryAndMapComponent = () => {
  
  return (
    <div style={{ display: 'flex' }}>
      <Card style={{ flex: 1, marginRight: '1rem', maxHeight: '500px', boxShadow: '0 4px 6px rgba(255, 0, 0, 0.6)' }}> {/* Adjust the max-height as per your requirement */}
        <h2 className='text-center text-black text-xl mb-6'>Inquiry Form</h2>
        <InquiryForm />
      </Card>
      <Card style={{ flex: 1, marginRight: '1rem', maxHeight: '500px', boxShadow: '0 4px 6px rgba(0, 255, 0, 0.6)'}}>
       {/* Adjust the max-height as per your requirement */}
        <h2 className='text-center text-black text-xl mb-6'>Map</h2>
        <MapLeaflet />
      </Card>
    </div>
  );
};

export default InquiryAndMapComponent;
