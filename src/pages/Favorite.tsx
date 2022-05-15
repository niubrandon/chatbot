import { useState, useEffect } from 'react';
import CollectionCard from '../components/CollectionCard';

interface Collection {
  id: string
  prompt: string
  response: string
  postedOn: string
  isFavorite: boolean
  model: string
  }

  interface Props {
    handleFavorite: (value: Collection) => void
  }

export default function Favorite ({handleFavorite}: Props) {
  const [favoriteCollection, setFavoriteCollection] = useState<Collection[]>([]);
  useEffect(() => {
    //retreive from localstorage
    if (localStorage.collection && favoriteCollection.length === 0) {
      const  collectionArray = JSON.parse(localStorage.collection);
      setFavoriteCollection(collectionArray); 
    }
  },[]);

  const collectionCards = favoriteCollection.filter((a)=> {return a.isFavorite;}).map((item) => {
    return ( 
      <CollectionCard item={item} key={item.id} handleFavorite={handleFavorite} />  
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