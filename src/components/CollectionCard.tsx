import { useState } from 'react';
import { ReactComponent as BookmarkSvg } from '../assets/bookmark-solid.svg';
import { ReactComponent as QuestionSvg } from '../assets/circle-question-regular.svg';
import { ReactComponent as ResponseSvg } from '../assets/voicemail-solid.svg';
import { useTranslation } from 'react-i18next';

interface Collection {
  id: string
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
      <div className="flex flex-col w-full justify-around text-base gap-2">
        <p>AI {t('engine')}: <span className="text-md font-normal text-neutral-400">{item.model}</span></p>
        <div className="grid grid-cols-12 gap-3 items-center">
          <QuestionSvg className="h-5 w-5 fill-purple-300" />
          <p className="col-span-11 text-base grow">{item.prompt}</p>
        </div>
        <div className="grid grid-cols-12 gap-3 items-center">
          <ResponseSvg className="h-5 w-5 fill-sky-500" />
          <p className="col-span-11 text-base grow">{item.response}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm lg:grid-cols-1">
          <p>{t('reference')}: <span id="collection-id" data-testid="collection-id" className="text-sm font-normal text-neutral-400">{item.id}</span></p>  
          <p className="text-sm italic text-gray-300 flex justify-end lg:justify-start"> posted on: {item.postedOn}</p>
        </div>
      </div> 
      <div className="absolute right-2 flex gap-2 justify-between items-end text-sm">
        <BookmarkSvg 
          role="button"
          onClick={() => handleFavorite(item)}
          className={ item.isFavorite ? 'h-6 w-6 hover:fill-red-300 fill-red-400 dark:fill-white' : 'hover:animate-bounce h-6 w-6 fill-neutral-400 hover:fill-neutral-600'}>
        </BookmarkSvg>      
      </div>  
    </div>
  );
}