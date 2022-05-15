import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Collection {
  prompt: string
  response: string
  postedOn: string
  isFavorite: boolean
  model: string
  id: string
  }
  
export function useApplicationData() {

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
      toast.warning(`collection id:${item.id} removed from favorite`);
    } else {
      let copyCollection = [...collection];
      copyCollection[itemIndex] = {id:item.id, prompt: item.prompt, response: item.response, postedOn: item.postedOn, model: item.model,isFavorite: true};
      setCollection(prevState => ([...copyCollection]));
      localStorage.setItem('collection', JSON.stringify(copyCollection));
      toast.success(`collection id:${item.id} added to favorite`);
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
  return { prompt, setPrompt, collection, setCollection, isLoading, setIsLoading, handleFavorite, handleSubmit};
}