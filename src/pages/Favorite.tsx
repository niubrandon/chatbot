import CollectionCard from '../components/CollectionCard';
import { ReactComponent as BookmarkSvg } from '../assets/bookmark-solid.svg';
interface Collection {
  id: string
  prompt: string
  response: string
  postedOn: string
  isFavorite: boolean
  model: string
  }

  interface Props {
    collection: Collection[]
    handleFavorite: (value: Collection) => void
  }

export default function Favorite ({collection, handleFavorite}: Props) {

  const collectionCards = collection.filter((a)=> {return a.isFavorite;}).map((item) => {
    return ( 
      <CollectionCard item={item} key={item.id} handleFavorite={handleFavorite} />  
    );
  });
  
  return (
    <>
      { collection.filter((a)=> {return a.isFavorite;}).length === 0 ? 
        (<div className="text-center mt-4 mx-10 text-lg font-medium dark:text-white">
          <span>You currently do not have anything favorited. Go back to the Home page and click on the</span> 
          <BookmarkSvg className="inline h-6 w-6 fill-neutral-400" />
          <span> to favorite it.</span></div>) : 
        (<div className="flex flex-col gap-2 items-center px-4">
          {collectionCards}
        </div> 
        )}    
    </>
  );
}