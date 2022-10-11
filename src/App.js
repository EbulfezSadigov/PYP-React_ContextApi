import './App.css';
import ProductList from './Products/ProductList';
import { CartProvider } from './Products/CartContext';
import { Route, Routes } from 'react-router-dom';
import ProductDetailPage from './Products/ProductDetailPage';
import Cart from './Products/Cart';


function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path='/:ID' element={<ProductDetailPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </CartProvider>
  );
}

export default App;
