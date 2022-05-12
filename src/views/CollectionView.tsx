import CollectionCard from '../components/CollectionCard';
export default function CollectionView () {
  const data = [
    {id: 1, prompt: 'Who are you?', response: 'I am chatbot', postedOn: '2022-05-10'},
    {id: 2, prompt: 'What do you like?', response: 'Coffee',postedOn: '2022-05-09'},
  ];
  const collectionCards = data.map((item) => {
    return (
      <CollectionCard item={item} key={item.id} />
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