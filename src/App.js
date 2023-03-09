import './App.css'; 
import './navbar.css';
import Navbar from './componenets/Navbar';
import User from './pages/User';
import Cart from './pages/Cart';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Slideimg from './Slideimg';
import ImageSlider from './componenets/ImageSlider';
import SignupPage from './pages/Signup'
import LoginPage from './pages/Login'
import Layout from './pages/Layout';
import Xbox from './pages/Xbox';
import Playstation from './pages/Playstation';
import Pc from './pages/Pc';
import Nintendo from './pages/Nintendo';

function App() {
  return (
    <BrowserRouter>    
    <div className="App">
      <Routes>
            {/* <Route path="/" element={ <Navbar />}/>  */}
            {/* <Route  path='/user'  element={<User />} /> */}
            <Route  path='/' element={<Layout/>} />
            <Route path='/xbox' element={<Xbox />} />
            <Route path='/playstation' element={<Playstation />} />
            <Route path='/nintendo' element={<Nintendo />} />
            <Route path='/pc' element={<Pc />} />
            <Route  path='/cart' element={<Cart />} />
            <Route  path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignupPage/>} />
          </Routes>
          {/* <ImageSlider slides={Slideimg} /> */}
         {/* <Playstation /> */}
       
         </div>
          {/* <ImageSlider slides={Slideimg} /> */}
    

      </BrowserRouter>
  );
}

export default App;
