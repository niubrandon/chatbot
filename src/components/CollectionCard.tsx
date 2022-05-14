import { ReactComponent as BookmarkSvg} from '../assets/bookmark-regular.svg';
import { useTranslation } from 'react-i18next';
import ReactTooltip from 'react-tooltip';
interface Item {
  prompt: string
  response: string
  postedOn: string
}
interface Props {
  item: Item
}

export default function Card ({item}: Props) {
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-fit border-2 border-neutral-200 rounded-lg flex justify-between 
      gap-2 shadow-md hover:border-purple-300 hover:shadow-xl dark:bg-gray-800 dark:text-white p-2 m-4">
      <div className="flex flex-col w-full justify-around">
        <span>{t('prompt')}:</span>
        <p className="text-base :">{item.prompt}</p>
        <span>{t('response')}: </span>
        <p className="text-base">{item.response}</p>
      </div> 
      <div className="absolute right-2 flex gap-2 justify-between items-end text-sm">
        {item.postedOn}
        <BookmarkSvg 
          data-tip
          role="button"
          data-for="collection-item"
          className="h-6 w-6 hover:fill-purple-300 dark:fill-white"></BookmarkSvg>
        <ReactTooltip id="collection-item" effect="solid" type='info' globalEventOff='click'>
          <span>Bookmark this collection!</span>
        </ReactTooltip>  
      </div>  
    </div>
  );
}