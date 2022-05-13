import { useEffect, useState } from 'react';
import PromptForm from '../components/PromptForm';
import PresetView from '../views/PresetView';
import CollectionView from '../views/CollectionView';

interface Collection {
prompt: string
response: string
postedOn: string
}
export default function Home () {
  const [prompt, setPrompt] = useState('');
  const [collection, setCollection] = useState<Collection[]>([]);
  const axios = require('axios');

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
    //const api_key= process.env.API_KEY;
    const api_key = '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';
    axios.post(url, data, {
      headers: {
        'Authorization': `Bearer ${api_key}`
      }
    }).then((res: any) => {
      console.log('###GET REQUEST RESPONSE', res.data.choices[0].text);
      let postedOn = new Date();
      const newCollection: Collection = {prompt: prompt, response:res.data.choices[0].text, postedOn: postedOn.toUTCString() };
      //update state pass it to collectionView
      setCollection(prevState => (
        [...prevState, newCollection]
      ));
        
      if (localStorage.collection) {
        //collection exist
        let current = localStorage.collection;
        console.log('##collection from localstroage', current);
        let parsedCurrent = JSON.parse(current);
        console.log('##parsed collection from localstroage', parsedCurrent);
        let updatedCollection = parsedCurrent.push(newCollection);
        console.log('##updated collection from localstroage', updatedCollection);
        localStorage.setItem('collection', JSON.stringify(updatedCollection));
                     
      } else {
        //collection not exist
        console.log('##collection do not exist in localstoa=rag');
        let collectionArray: Array<Collection> = [];
        collectionArray.push(newCollection);
        localStorage.setItem('collection', JSON.stringify(newCollection));
      }
        
   
    }).catch((error: any) => {
      console.log('###GET REQUEST ERROR', error);
    });
  }
  useEffect(() => {
    
  });
  /*   useEffect(() => {
    // collection change, update localStorage
    if (collection.length ) {
      localStorage.setItem('collection', JSON.stringify(collection));
    }
  },[collection]);

  useEffect(() => {
  // retreve localstorage on load
    if (localStorage.collection) {
      let items = localStorage.getItem('collection');
      console.log('***items is', items);
   
    }

    // localStorage.setItem('collection', JSON.stringify(collection));
  },[]);
 */
  return (
    <>
      <div className="text-xl font-bold pt-6">
        <PromptForm prompt={prompt} setPrompt={setPrompt} handleSubmit={handleSubmit} />
        <PresetView />
        <CollectionView collection={collection} setCollection={setCollection} />
      </div>
    </>
  );
}