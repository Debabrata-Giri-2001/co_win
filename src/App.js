import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ABHA from './components/pages/ABHA/Abha'
import Dashboard from './components/pages/Dashbord/Dashboard'
import VerifyCertificate from './components/pages/VarifyCertificate/VerifyCertificate'
import Faq from './components/pages/Faq/Faq'
import Partners from './components/pages/Patners/Partners'
import Home from './components/pages/Home/Home'
import Navbar from './components/Navbar';
import FotterSection from './components/pages/Footer/FotterSection'
function App() {

  return (
    <div className="">

      {/* All Routes */}
      <div className=''>
        <Router>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>

          <Routes>
            <Route path='/abha' element={<ABHA />} />
          </Routes>

          <Routes>
            <Route path='/dashbord' element={<Dashboard />} />
          </Routes>

          <Routes>
            <Route path='/verifycertificate' element={<VerifyCertificate />} />
          </Routes>

          <Routes>
            <Route path='/faq' element={<Faq />} />
          </Routes>

          <Routes>
            <Route path='/partners' element={<Partners />} />
          </Routes>

        </Router>
      </div>
      <FotterSection />
    </div>
  );
}

export default App;
