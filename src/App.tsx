// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import AddProduct from './products/AddProduct';
import ProfilePage from './profile/ProfilePage';
import NotFound from './pages/notFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
