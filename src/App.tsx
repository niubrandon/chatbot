import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useApplicationData } from './hooks/useApplicationData';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Favorite from './pages/Favorite';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';
interface Collection {
  prompt: string
  response: string
  postedOn: string
  isFavorite: boolean
  model: string
  id: string
  }

function App() {

  const { prompt, setPrompt, collection, setCollection, isLoading, handleFavorite, handleSubmit } = useApplicationData();
  
  useEffect(() => {
    if (localStorage.collection && collection.length === 0) {
      let collectionArray: Array<Collection> = [];
      collectionArray = JSON.parse(localStorage.collection);
      setCollection(collectionArray); 
    }
  },[]);

  return (
    <div className="flex flex-col dark:bg-black">
      <Header />
      <main
        id="main"
        data-testid="main" 
        className="mt-[70px] h-screen dark:from-black dark:to-slate-800"
        role="main">
        <Routes>
          <Route path="/" element={<Home 
            prompt={prompt} 
            setPrompt={setPrompt} 
            handleSubmit={handleSubmit} 
            isLoading={isLoading} 
            collection={collection} 
            handleFavorite={handleFavorite} />} />
          <Route path="/favorite" element={<Favorite 
            handleFavorite={handleFavorite} 
            collection={collection}  />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
