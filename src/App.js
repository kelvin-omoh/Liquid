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
import FundsDynamic from './pages/dynamic-page/fundsDynamic';
import White from './pages/White';
import SingleNews from './pages/dynamic-page/singleNews';
import PrivacyPolicy from './pages/Privacy-policy';
import TermsOfService from './pages/Terms-of-service';
import { Link } from 'react-router-dom';

import FAQ from './pages/FAQ';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='other-pages'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/white' element={<White/>}></Route>
          <Route path='/funds' element={<Funds />}></Route>
          <Route path='/funds/:data' element={<FundsDynamic />}> </Route> {/* Uses Dynamic Routing */}
          <Route path='/investors' element={<Investors />}></Route>
          <Route path='/faq' element={<FAQ />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/news/:newsId' element={<SingleNews />}></Route>
          <Route path='/tracts' element={<Tracts />}></Route>
          <Route path='/terms-of-service' element={<TermsOfService />}></Route>
          <Route path='privacy-policy' element={<PrivacyPolicy />}></Route>
          <Route path='/*' element={<div className=' h-screen flex flex-col justify-center items-center text-gray-500 text-[5em]'> <p>Oops!! 404  ERROR </p><p>(Page Doest Exist)</p>
          <Link to="/">  <button className='bg-black p-4 text-white text-[.3em]'>back to home</button></Link>
          </div>}></Route>
            {/* <Route path=''></Route> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
