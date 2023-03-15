import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Form from './Form';
import Home  from './Home';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Orders from './Orders';

function App() {
  return (      
        <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/form" element={<Form/>} />
            <Route path="/orders" element={<Orders/>} />
          </Routes>
          <Footer/>
          </main>
        </BrowserRouter>
  );
}

export default App;
