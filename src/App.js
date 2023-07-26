import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { Home, SingleCourse, Cart, Courses } from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Login from './login_files/Login';
import Register from './login_files/Register';

import Customer from './login_files/Customer';
import Home_login from './login_files/Home_login';
import PaymentPage from './Payments/PaymentPage';
import Add_course from './components/Add_course';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/category/:category" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home_login" element={<Home_login />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/customer' element={<Customer />}></Route>
        <Route path='/Add_course' element={<Add_course />}></Route>
        <Route path='/payment' element={<PaymentPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
