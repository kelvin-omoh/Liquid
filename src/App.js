import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Funds from './pages/Funds';
import Investors from './pages/Investors';
import News from './pages/News';
import Tracts from './pages/Tracts';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <h1>Hello Liquid</h1> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/funds' element={<Funds />}></Route>
        <Route path='/investors' element={<Investors />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/tracts' element={<Tracts />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
