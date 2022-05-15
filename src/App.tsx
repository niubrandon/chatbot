import Home from './pages/Home';
import About from './pages/About';
import Favorite from './pages/Favorite';
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
            onClick={() => navigate('/')}
            className="text-3xl font-bold text-purple-500 cursor-pointer"   
            role="banner"    
          >ChatBot</h1>
          <nav role="navigation" className="flex gap-2">
            <Link className="font-semibold" to="/">Home</Link>
            <Link className="font-semibold" to="/favorite">Favorites</Link>
            <Link className="font-semibold" to="/about">About</Link>
          </nav>
        </div>
        <div className="flex gap-2">
          <ModeSwitch />  
          <LanguageSwitch /> 
        </div>         

      </div>
      <main 
        className="mt-[70px] h-screen dark:from-black dark:to-slate-800"
        role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </main>
      <footer 
        className="fixed bottom-0 py-2 w-full flex items-center justify-center 
      bg-slate-100 dark:bg-slate-900 dark:text-white font-medium z-10"
        role="contentinfo"
      >
        <p>
          Made with <span className="text-red-400">&hearts;</span> by <a href="https://www.linkedin.com/in/niubrandon/"className="text-purple-600">Brandon</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
