import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Admin from './pages/Admin';
import ProductDetails from './pages/ProductDetails';
import Auth from './pages/Admin/Auth';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/admin/auth" element={<Auth />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </Router>
);

export default App;
