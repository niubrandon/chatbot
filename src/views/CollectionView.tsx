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
    collection: Collection[]
    handleFavorite: (value: Collection) => void
  }

export default function CollectionView ({collection, handleFavorite}: Props) {

  const collectionCards = collection.sort((a, b)=> {return Date.parse(b.postedOn) - Date.parse(a.postedOn);}).map((item) => {
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