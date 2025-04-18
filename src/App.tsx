import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import AddProduct from './products/AddProduct';
import NotFound from './pages/notFound';
import ProductDetail from './products/ProductDetail';
import ProfilePage from './pages/ProfilePage';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/product-detail' element={<ProductDetail/>}/>
        <Route path='/profile-page'element={<ProfilePage/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
