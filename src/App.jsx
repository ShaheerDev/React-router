import { React } from "react";
import { Nav } from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/home.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import BootstrapLogo from './imgs/footer_a.png'
import ReactLogo from './imgs/footer_b.png'

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ textAlign: 'center' }}>
        <ul className='flex items-center'>
          <p className='ml-5'>
          </p>
          <p className='ml-5'>
          </p>
          <p className='ml-5'>
          </p>
        </ul>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link className="nav-link" to="/" >Home</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div class="text-center p-4" style={{fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.200)', position: 'fixed', bottom: 0, left: 0, right: 0}}>
      <img src={ReactLogo} width={45} height={30}/>
        BMJ/Jawan Pakistan Assigment Assignment#7 made by:
        <a class="text-reset fw-bold" href="https://www.github.com/shaheerdev" target='_blank'> Shaheer Muhammad Khan</a>
        <img src={BootstrapLogo} width={60} height={35}/>
      </div>
    </BrowserRouter>
  );
}