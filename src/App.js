import React from 'react';
import Layout from './components/layout';
import Profile from './components/Profile';

function App() {
  return (
    <main>
      <Layout>
        <Profile />
        <div>Repositorios</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
