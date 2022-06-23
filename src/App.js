import React from 'react';
import Layout from './components/layout';
import Profile from './components/Profile';
import Repositories from './components/repositories';
import { ResetCss } from './global/resetCss';

function App() {
  return (
    <main>
      <ResetCss/>
      <Layout>
        <Profile/>
        <Repositories/>
      </Layout>
    </main>
  );
}

export default App;
