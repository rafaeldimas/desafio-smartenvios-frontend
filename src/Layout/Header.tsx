import { CalculatorOutlined } from '@ant-design/icons';
import { Breadcrumb, theme } from 'antd';
import { Header as HeaderAnt } from 'antd/es/layout/layout';
import React from 'react';

const Header: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <HeaderAnt style={{ padding: 0, background: colorBgContainer }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><CalculatorOutlined /> Cotação de frete</Breadcrumb.Item>
      </Breadcrumb>
    </HeaderAnt>
  )
}

export default Header;
