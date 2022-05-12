import Card from '../components/Card';
export default function CollectionView () {
  const data = [
    {id: 1, prompt: 'Who are you?', response: 'I am chatbot'},
    {id: 2, prompt: 'What do you like?', response: 'Coffee'},
  ];
  const collection = data.map((item) => {
    return (
      <Card item={item} key={item.id} />
    );
  });
  return (
    <>
      {collection}
    </>
  );
}