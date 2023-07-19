import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home'
import Header from './components/Header';
import About from './About';
import Contact from './Contact'

function App() {

  return (
    <div className="text-center">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
