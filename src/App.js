import React from 'react';
import Layout from './components/layout';
import Profile from './components/Profile';
import Repositories from './components/repositories';
import { ResetCss } from './global/resetCss';
import GithubProvider from './providers/github-provider';

function App() {
  return (
    <main>
      <GithubProvider/>
      <ResetCss/>
      <Layout>
        <Profile/>
        <Repositories/>
      </Layout>
    </main>
  );
}

export default App;
