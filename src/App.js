
import { useState } from 'react';
import './App.css';
import Create from './Components/Create';

function App() {
  const [create,setCreate] = useState();
  return (
    <div className="App">
      <h1>Tiger Survey</h1>
      <button onClick={() => setCreate('ok')}>Create Survey</button>
      {
        create && <Create/>
      }
      <button>Take Survey</button>
    </div>
  );
}

export default App;
