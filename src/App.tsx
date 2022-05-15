import { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Favorite from './pages/Favorite';
import ModeSwitch from './components/ModeSwitch';
import LanguageSwitch from './components/LanguageSwitch';
import { ReactComponent as LogoSvg } from './assets/circle-nodes-solid.svg';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

interface Collection {
  prompt: string
  response: string
  postedOn: string
  isFavorite: boolean
  model: string
  id: string
  }

function App() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [collection, setCollection] = useState<Collection[]>([]);
  const axios = require('axios');

  const handleFavorite = (item :Collection) => {
    let itemIndex = 0;
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].id === item.id) {
        itemIndex = i;
      }
    }
    if (item.isFavorite) {
      let copyCollection = [...collection];
      copyCollection[itemIndex] = {id:item.id, prompt: item.prompt, response: item.response, postedOn: item.postedOn, model: item.model,isFavorite: false};
      setCollection(prevState => ([...copyCollection]));
      localStorage.setItem('collection', JSON.stringify(copyCollection));
    } else {
      let copyCollection = [...collection];
      copyCollection[itemIndex] = {id:item.id, prompt: item.prompt, response: item.response, postedOn: item.postedOn, model: item.model,isFavorite: true};
      setCollection(prevState => ([...copyCollection]));
      localStorage.setItem('collection', JSON.stringify(copyCollection));
    }
  };

  let collectionArray: Array<Collection> = [];

  function handleSubmit(event: any) {
    setIsLoading(true);
    event?.preventDefault();
    console.log('##form data', event.target.prompt.value, event.target.model.value);
    const model = event.target.model.value === 'davinci' ? 'text-davinci-002' : 'text-curie-001';
    const url = `https://api.openai.com/v1/engines/${model}/completions`;
    const data = {
      'prompt': prompt,
      'temperature': 0.9,
      'max_tokens': 150,
      'top_p': 1,
      'frequency_penalty': 0,
      'presence_penalty': 0.6,
      'stop': [' Human:', ' AI:']
    };
    const REACT_APP_API_KEY= process.env.REACT_APP_API_KEY;
    axios.post(url, data, {
      headers: {
        'Authorization': `Bearer ${REACT_APP_API_KEY}`
      }
    }).then((res: any) => {    
      if (!res.data.choices[0].text) {
        toast.warning('Sorry, I don\'t understand your question');
      } else {       

        let postedOn = new Date();
        const newCollection: Collection = {id: uuidv4(), prompt: prompt, response:res.data.choices[0].text, postedOn: postedOn.toUTCString(), model: model , isFavorite: false };
   
        setCollection(prevState => (
          [...prevState, newCollection]
        ));
          
        if (localStorage.collection) {   
          collectionArray = JSON.parse(localStorage.collection);
          collectionArray.unshift(newCollection);   
          localStorage.setItem('collection', JSON.stringify(collectionArray));
                       
        } else {
          let collectionArray: Array<Collection> = [];
          collectionArray.push(newCollection);
          localStorage.setItem('collection', JSON.stringify(collectionArray));
        }  
        toast.success('🦄  Added to collection!');
        setIsLoading(false);
      }
      setPrompt('');   
   
    }).catch((error: any) => {
      console.log(error);
      toast.error(error);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    if (localStorage.collection && collection.length === 0) {
      collectionArray = JSON.parse(localStorage.collection);
      setCollection(collectionArray); 
    }
  },[]);

  return (
    <div className="flex flex-col dark:bg-black">

      <div
        id="header"
        data-testid="header"
        className="fixed top-0 z-10 w-full bg-white dark:bg-black dark:text-white 
      flex justify-between px-4 py-4 items-center border-b-2 border-neutral-200">
        <div className="flex items-center gap-6">
          <LogoSvg className="w-7 h-7 fill-purple-500" />
          <h1 
            onClick={() => navigate('/')}
            className="text-3xl font-bold text-purple-500 cursor-pointer"   
            role="banner"    
          >ChatBot</h1>
          <nav role="navigation" className="flex gap-2">
            <Link className="font-semibold" to="/">{t('home')}</Link>
            <Link className="font-semibold" to="/favorite">{t('favorites')}</Link>
            <Link className="font-semibold" to="/about">{t('about')}</Link>
          </nav>
        </div>
        <div className="flex gap-2">
          <ModeSwitch />  
          <LanguageSwitch /> 
        </div>         

      </div>
      <main
        id="main"
        data-testid="main" 
        className="mt-[70px] h-screen dark:from-black dark:to-slate-800"
        role="main">
        <Routes>
          <Route path="/" element={<Home prompt={prompt} setPrompt={setPrompt} handleSubmit={handleSubmit} isLoading={isLoading} collection={collection} handleFavorite={handleFavorite} />} />
          <Route path="/favorite" element={<Favorite handleFavorite={handleFavorite} collection={collection}  />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </main>
      <footer
        id="footer"
        data-testid="footer" 
        className="fixed bottom-0 py-2 w-full flex items-center justify-center 
      bg-slate-100 dark:bg-slate-900 dark:text-white font-medium z-10"
        role="contentinfo"
      >
        <p>
          Made with <span className="text-red-400">&hearts;</span> by <a href="https://www.linkedin.com/in/niubrandon/"className="text-purple-600 animate-pulse hover:text-lg">Brandon</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
