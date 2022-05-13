import { ReactComponent as BookmarkSvg} from '../assets/bookmark-regular.svg';
interface Item {
  prompt: string
  response: string
  postedOn: string
}
interface Props {
  item: Item
}

export default function Card ({item}: Props) {

  return (
    <div className="w-full h-fit border-2 border-neutral-200 rounded-lg flex justify-between 
      gap-2 shadow-md hover:border-purple-300 hover:shadow-xl dark:bg-black dark:text-white p-2">
      <div className="flex flex-col justify-around">
        <p>Prompt: {item.prompt} </p>
        <p>Response: {item.response} </p>
      </div> 
      <div className="flex flex-col justify-between items-end text-sm">
        <BookmarkSvg className="h-6 w-6 hover:fill-purple-300" />
        {item.postedOn}       
      </div>  
    </div>
  );
}