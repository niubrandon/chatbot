import CollectionCard from '../components/CollectionCard';
interface Collection {
  prompt: string
  response: string
  postedOn: string
  }
  interface Props {
    collection: Collection[]
    setCollection: (value: Collection[]) => void
  }
export default function CollectionView ({collection, setCollection}: Props) {

  const collectionCards = collection.sort((a, b)=> {return Date.parse(b.postedOn) - Date.parse(a.postedOn);}).map((item, index) => {
    return (
      <CollectionCard item={item} key={index} />
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