
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Mens from './components/Mens';
import Footer from './components/Footer';
import Login from './components/Login';



function App() {
  return (
    <div className="App">
      <Nav/>
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/signup' element={<Signup />} />
     <Route path='/nav' element={<Nav />} />
     <Route path='/mens' element={<Mens />} />
     <Route path='/footer' element={<Footer/>} />
     <Route path='/login' element={<Login/>} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
