import Home from './pages/Home';
import About from './pages/About';
import { ReactComponent as DarkSvg } from './assets/moon-solid.svg';
import { ReactComponent as LightSvg } from './assets/sun-solid.svg';
import { ReactComponent as LogoSvg } from './assets/circle-nodes-solid.svg';
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="flex flex-col mx-4 mt-4">

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <LogoSvg className="w-7 h-7 fill-slate-500" />
          <h1 className="text-3xl font-bold">ChatBot</h1>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </div>       
        <div className="flex gap-1 border-2 border-neutral-300 rounded-lg p-1 ">
          <LightSvg className="w-5 h-5 fill-amber-400 cursor-pointer" />
          <DarkSvg className="w-5 h-5 fill-sky-700 cursor-pointer" />        
        </div>
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
