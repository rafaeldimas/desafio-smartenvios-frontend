
import { Form, Input } from 'antd';
import React from 'react';

const ShippingQuote: React.FC = () => {
  const [form] = Form.useForm()
  return (
    <Form form={form} layout="inline">
      <Form.Item
        name="zip_code_start"
        label="Seu CEP"
        rules={[{ required: true }, { type: 'string', min: 9 }]}
        layout='vertical'
      >
        <Input placeholder="38280-000" />
      </Form.Item>
      <Form.Item
        name="zip_code_end"
        label="CEP do comprador"
        rules={[{ required: true }, { type: 'string', min: 9 }]}
        layout='vertical'
      >
        <Input placeholder="38280-000" />
      </Form.Item>
    </Form>
  )
}

export default ShippingQuote;
