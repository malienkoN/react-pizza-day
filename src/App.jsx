import { Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Order from './pages/Order';
import NotFound from './pages/NotFound';
// components
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order/new" element={<Order />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
