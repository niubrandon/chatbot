import { useState, useEffect } from 'react';
import CollectionCard from '../components/CollectionCard';

interface Collection {
  prompt: string
  response: string
  postedOn: string
  isFavorite: boolean
  }

export default function Favorite () {
  const [favoriteCollection, setFavoriteCollection] = useState<Collection[]>([]);
  useEffect(() => {
    //retreive from localstorage
    if (localStorage.collection && favoriteCollection.length === 0) {
      const  collectionArray = JSON.parse(localStorage.collection);
      setFavoriteCollection(collectionArray); 
    }
  },[]);

  const handleFavorite = () => {

  };
  const collectionCards = favoriteCollection.filter((a)=> {return a.isFavorite;}).map((item, index) => {
    return ( 
      <CollectionCard item={item} key={index} handleFavorite={handleFavorite} />  
    );
  });
  return (
    <>
      <div className="flex flex-col gap-2 mx-6">
        {collectionCards}
      </div>
    </>
  );
}