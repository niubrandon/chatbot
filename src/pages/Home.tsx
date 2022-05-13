import { useEffect, useState } from 'react';
import PromptForm from '../components/PromptForm';
import PresetView from '../views/PresetView';
import CollectionView from '../views/CollectionView';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface Collection {
prompt: string
response: string
postedOn: string
}
export default function Home () {
  const [prompt, setPrompt] = useState('');
  const [collection, setCollection] = useState<Collection[]>([]);
  const axios = require('axios');

  let collectionArray: Array<Collection> = [];
  function handleSubmit(event: any) {
    event?.preventDefault();
    console.log('##form data', event.target.prompt.value);
    //http request
    const url = 'https://api.openai.com/v1/engines/text-davinci-002/completions';
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
      let postedOn = new Date();
      const newCollection: Collection = {prompt: prompt, response:res.data.choices[0].text, postedOn: postedOn.toUTCString() };
 
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
      toast.success('🦄 Please check you response in collection!');
   
    }).catch((error: any) => {
      console.log(error);
      toast.error(error);
    });
  }

  useEffect(() => {
    if (localStorage.collection && collection.length === 0) {
      collectionArray = JSON.parse(localStorage.collection);
      setCollection(collectionArray); 
    }
  },[]);
 
  return (
    <>
      <div className="text-xl font-bold pt-6 dark:text-white">
        <PromptForm prompt={prompt} setPrompt={setPrompt} handleSubmit={handleSubmit} />
        <h2 className="ml-4">Running out of ideas?</h2>
        <PresetView setPrompt={setPrompt}  />
        <h2 className="ml-4">Collection</h2>
        <CollectionView collection={collection} setCollection={setCollection} />      
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}