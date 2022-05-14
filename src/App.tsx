import Home from './pages/Home';
import About from './pages/About';
import ModeSwitch from './components/ModeSwitch';
import LanguageSwitch from './components/LanguageSwitch';
import { ReactComponent as LogoSvg } from './assets/circle-nodes-solid.svg';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
function App() {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col dark:bg-black">

      <div className="fixed top-0 z-10 w-full bg-white dark:bg-black dark:text-white 
      flex justify-between px-4 py-4 items-center border-b-2 border-neutral-200">
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
        <div className="flex gap-2">
          <ModeSwitch />  
          <LanguageSwitch /> 
        </div>         

      </div>
      <main className="mt-[70px] bg-gradient-to-b from-white to-slate-100 dark:from-black dark:to-slate-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </main>
      <footer className="fixed bottom-2 w-full flex items-center justify-center font-medium bg-white z-10">
        Made in &hearts; with Brandon!
      </footer>
    </div>
  );
}

export default App;
