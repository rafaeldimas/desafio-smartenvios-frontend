import { Layout, theme } from 'antd';
import React from 'react';
import Header from './Layout/Header.tsx';
import SideBar from './Layout/SideBar.tsx';
import Content from './Layout/Content.tsx';

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar />
      <Layout style={{ padding: '0 40px', background: colorBgContainer }}>
        <Header />
        <Content />
      </Layout>
    </Layout>
  );
};

export default App;