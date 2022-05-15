import { useState } from 'react';
import { ReactComponent as BookmarkSvg} from '../assets/bookmark-regular.svg';
import { useTranslation } from 'react-i18next';
import ReactTooltip from 'react-tooltip';

interface Collection {
  prompt: string
  response: string
  postedOn: string
  isFavorite: boolean
  }
interface Props {
  item: Collection
  handleFavorite: (value: Collection) => void
}

export default function Card ({item, handleFavorite}: Props) {
  const { t } = useTranslation();
  
  // temporary fix to add tooltip state and mouse events because the react-tooltip library does not support React 18
  // https://github.com/wwayne/react-tooltip/issues/769
  const [tooltip, showTooltip] = useState(true);

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
        {!item.isFavorite &&  <BookmarkSvg 
          data-tip
          role="button"
          data-for={item.postedOn}
          onMouseEnter={() => showTooltip(true)}
          onMouseLeave={() => {
            showTooltip(false);
            setTimeout(() => showTooltip(true), 50);
          }}
          onClick={() => handleFavorite(item)}
          className="h-6 w-6 hover:fill-purple-300 dark:fill-white"></BookmarkSvg>  }
       
        { tooltip &&  <ReactTooltip id={item.postedOn} effect="solid" type='info' globalEventOff='click'>
          <span>Bookmark this collection!</span>
        </ReactTooltip>  }
       
      </div>  
    </div>
  );
}