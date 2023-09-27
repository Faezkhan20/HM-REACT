
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Signup from './components/Signup';
import Nav from './components/Nav';



function App() {
  return (
    <div className="App">
     <Routes>
     <Route path='/home' element={<Home />} />
     <Route path='/signup' element={<Signup />} />
     <Route path='/nav' element={<Nav />} />
     </Routes>
    </div>
  );
}

export default App;
