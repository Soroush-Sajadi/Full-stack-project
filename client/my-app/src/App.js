import React from 'react';
import RenderComment from './Componets/RenderComment'
import PostComment from './Componets/PostComment';
import './Componets/CSS/App.css'

function App() {
  return (
    <div >
      <PostComment />
      <RenderComment />
    </div>
  );
}

export default App;
