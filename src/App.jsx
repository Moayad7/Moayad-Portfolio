import './App.css';
import Navbar from './components/Navbar/index'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import {Home} from './pages/Home/Home'
import {About} from './pages/About/About'
import {Portfolio} from './pages/Portfolio/Portfolio'
import {Skills} from './pages/Skills/Skills'
import {Contact} from './pages/Contact/Contact'
import { Footer } from './components/Navbar/Footer/Footer';

const App = () => {
  return (
    
      <div className="App lg:h-screen bg-gradient-to-b from-indigo-100 to-indigo-200 ">
        <Router className="h-screen">
          <Navbar/>
          <Routes className="h-full relative">
            <Route path='/' element={<Home/>}/>
            <Route path='Home' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='portfolio' element={<Portfolio/>}/>
            <Route path='skills' element={<Skills/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Routes>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
