interface Item {
  id: number
  prompt: string
  response: string
}

interface Props {
  item: Item
}
export default function Card ({item}: Props) {

  return (
    <>
      <div className="w-full h-[100px] border-2 border-neutral-200 rounded-lg flex flex-col 
      gap-2 shadow-md hover:border-purple-300">
        <div>
          <p>Prompt: {item.prompt} </p>
        </div>
        <div>
          <p>Response: {item.response} </p>
        </div>      
      </div>
    </>
  );
}