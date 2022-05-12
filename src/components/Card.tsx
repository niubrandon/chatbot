import { ReactComponent as BookmarkSvg} from '../assets/bookmark-regular.svg';
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
      <div className="realtive w-full h-[100px] border-2 border-neutral-200 rounded-lg flex flex-col 
      gap-2 shadow-md hover:border-purple-300 hover:shadow-xl dark:bg-black dark:text-white p-2">
        <div>
          <p>Prompt: {item.prompt} </p>
        </div>
        <div>
          <p>Response: {item.response} </p>
        </div> 
        <BookmarkSvg className="absolute right-4 h-6 w-6" />     
      </div>
    </>
  );
}