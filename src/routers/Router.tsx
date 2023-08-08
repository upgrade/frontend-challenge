
import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignUp from '../components/SignUp';
import MoreInfo from '../components/MoreInfo';
import Confirmation from '../components/Confirmation';
import Success from '../components/Success';
import Error from '../components/Error';

const { Content } = Layout;

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Content>
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/more-info" element={<MoreInfo />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/success" element={<Success />} />
            <Route path="/error" element={<Error />} />
        </Routes>
      </Content>
    </Layout>
  </BrowserRouter>
);

export default Router;
