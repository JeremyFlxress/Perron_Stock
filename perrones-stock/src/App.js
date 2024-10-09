import React from 'react';
import LoginInterface from './componentes/InterfaceLogin';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Test Heading</h1>
      <LoginInterface />
    </div>
  );
}

export default App;