import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './component/pages/Home'
import Services from './component/pages/Services';
import Products from './component/pages/Products';
import SignUp from './component/pages/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/services' element={<Services />} />
              <Route path='/products' element={<Products />} />
              <Route path='/sign-up' element={<SignUp />} />
            </Routes>
      </div>
    </Router>
  );
}

export default App;
