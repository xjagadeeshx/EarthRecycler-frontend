import { Form, Input, InputNumber, Button } from 'antd';
import React from 'react';

function Log() {
  return (
    <div className="Form1">
      <Form name="nest-messages">
        <Form.Item label="UserName">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Password">
          <Input />
        </Form.Item>
        <Form.Item label="Adress1">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Address2">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Country">
          <Input />
        </Form.Item>
        <Form.Item label="Pincode">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Phhone">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Phhone">
          <InputNumber />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default Log;
