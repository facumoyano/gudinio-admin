import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CargarProductos from './pages/CargarProductos';
import Home from './pages/Home';
import Login from './pages/Login';
import MisProductos from './pages/MisProductos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='mis-productos' element={<MisProductos />} />
        <Route path='cargar-productos' element={<CargarProductos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
