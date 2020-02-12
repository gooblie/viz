import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <canvas id = "canvas" width = {window.innerWidth} height = {window.innerHeight}></canvas>
    </div>
  );
}

function main() {
  const canvas = document.querySelector("#canvas");
  // Initialize the GL context
  const gl = canvas.getContext("webgl");

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }

  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
  });

}

window.onload = main;



export default App;
