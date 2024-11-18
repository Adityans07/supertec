import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Products from './components/Products';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/contact" element={<Contact/>} /> */}
        </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
