import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import {ToastContainer} from 'react-toastify';
import Register from './auth/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer
      />
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/*' element={<NotFound />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
