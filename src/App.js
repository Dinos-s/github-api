import React from 'react';
import Layout from './components/layout';
import Profile from './components/Profile';
import { ResetCss } from './global/resetCss';

function App() {
  return (
    <main>
      <ResetCss/>
      <Layout>
        <Profile/>
        <div>Repositorios</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
