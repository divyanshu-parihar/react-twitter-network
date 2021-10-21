// import { useState } from 'react';
import Graph from './components/graph/Graph';
// import logo from './logo.svg';
// import './App.css';

function App() {
  // useState
  return (
    <div className="min-w-full border-box min-h-screen mx-auto w- text-center bg-gray-800">
      <div className='container text-white'>A cool Project</div>
      {/* <div className="container p- w-2 h-4/5 z-50 bg-gray-600">
        <input className="ml-6 rounded text-white bg-gray-600 outline-none px-2"
             type="text"
             placeholder="Search ...."></input>
      </div> */}
      <Graph/>
    </div>
  );
}

export default App;
