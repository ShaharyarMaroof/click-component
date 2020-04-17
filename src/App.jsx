import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import 'animate.css/animate.css';

import './App.css';

import { ImageContainer, Toolbar, AnimatedClickContainer, AppFooter } from './Components'

const { Header, Footer, Content } = Layout;
function App() {
  return (
    <div className='app-container'>
      <AnimatedClickContainer>
        <Layout>
          <Header>
            <Toolbar />
          </Header>
          <Content>
            <div className='app-content-container'>
              <ImageContainer />
            </div>
          </Content>
          <Footer style={{ alignSelf: 'center' }}>
            <AppFooter />
          </Footer>
        </Layout>
      </AnimatedClickContainer>
    </div>
  );
}

export default App;
