import { Routes, Route } from 'react-router-dom';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Admin from './pages/Admin';
import AdminLock from './components/templates/AdminLock';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nosotros" element={<AboutUs/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/admin" element={<AdminLock> <Admin /> </AdminLock>} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;