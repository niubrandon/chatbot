import { ReactComponent as BookmarkSvg} from '../assets/bookmark-regular.svg';
interface Item {
  id: number
  prompt: string
  response: string
  postedOn: string
}

interface Props {
  item: Item
}

export default function Card ({item}: Props) {

  return (
    <>
      <div className="w-full h-[100px] border-2 border-neutral-200 rounded-lg flex justify-between 
      gap-2 shadow-md hover:border-purple-300 hover:shadow-xl dark:bg-black dark:text-white p-2">
        <div className="flex flex-col justify-around">
          <p>Prompt: {item.prompt} </p>
          <p>Response: {item.response} </p>
        </div> 
        <div className="flex flex-col justify-between items-end">
          <BookmarkSvg className="h-6 w-6 hover:fill-purple-300" />    
          <span>on: {item.postedOn}</span>
        </div>
        
      </div>
    </>
  );
}