import React from 'react';
import './reset.css'

function Reset() {
  
  function refreshPage() {
    window.location.reload();
  }
  
  return (
    <div>
      <button id='resetbuttonid' onClick={refreshPage}>RESTART GAME</button>
    </div>
  );
}

export default Reset;