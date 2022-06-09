import React from 'react';
import Layout from './components/layout';

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img source="https://avatars.githubusercontent.com/u/56043956?v=4" alt="Avatar user"/>
          <h1>Gabriel de Matos Ramos</h1>
          <h3>UserName: </h3>
          <span>dinos-s</span>
          <div>
            <div>
              <h4>Seguidores</h4>
              <span>0</span>
            </div>
            <div>
              <h4>Starreds</h4>
              <span>0</span>
            </div>
            <div>
              <h4>Seguindo</h4>
              <span>0</span>
            </div>
          </div>
        </div>
        <div>Repositorios</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
