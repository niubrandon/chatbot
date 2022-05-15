import { useState } from 'react';
import { ReactComponent as BookmarkSvg} from '../assets/bookmark-regular.svg';
import { useTranslation } from 'react-i18next';

interface Collection {
  prompt: string
  response: string
  postedOn: string
  isFavorite: boolean
  model: string
  }
interface Props {
  item: Collection
  handleFavorite: (value: Collection) => void
}

export default function Card ({item, handleFavorite}: Props) {
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
        {item.model}
        {item.postedOn}
        <BookmarkSvg 
          role="button"
          onClick={() => handleFavorite(item)}
          className={ item.isFavorite ? 'h-6 w-6 hover:fill-red-300 fill-red-400 dark:fill-white' : 'h-6 w-6 fill-neutral-400 hover:fill-neutral-600'}>
        </BookmarkSvg>      
      </div>  
    </div>
  );
}