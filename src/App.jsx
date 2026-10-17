import { Routes, Route } from 'react-router-dom';
import Header from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog'



function App() {
  return (
    <>
      <Header />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/nosotros" element={<AboutUs/>}/>
        <Route path="/products" element={< Products />}/>
        <Route path="/blog" element={<Blog />}/>
        </Routes>
      <Footer />

    </>
  )

}
export default App;