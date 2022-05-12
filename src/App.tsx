import Home from './pages/Home';
import About from './pages/About';
import ModeSwitch from './components/ModeSwitch';
import { ReactComponent as LogoSvg } from './assets/circle-nodes-solid.svg';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
function App() {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col">

      <div className="flex justify-between px-4 py-4 items-center border-b-2 border-neutral-200">
        <div className="flex items-center gap-6">
          <LogoSvg className="w-7 h-7 fill-purple-500" />
          <h1 
            onClick={() => navigate('/') }
            className="text-3xl font-bold text-purple-500"
          
          >ChatBot</h1>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </div>         
        <ModeSwitch />   

      </div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer className="fixed bottom-2 w-full flex items-center justify-center font-medium">
        Made in with Brandon!
      </footer>
    </div>
  );
}

export default App;
