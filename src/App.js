import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CargarProductos from './pages/CargarProductos';
import EditarProductos from './pages/EditarProductos';
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
        <Route path='editar-productos' element={<EditarProductos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
