import { Routes, Route } from 'react-router-dom';
import Header from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';
import Home from './pages/Home';
import Products from './pages/Products';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;