import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as SearchSvg } from '../assets/searchengin-brands.svg';
import { ReactComponent as CloseSvg } from '../assets/xmark-solid.svg';
import { ReactComponent as LoadingSvg } from '../assets/spinner-solid.svg';
interface Props {
  prompt: string
  isLoading: boolean
  setPrompt: (value: string) => void
  handleSubmit: (event: any) => void
}

export default function Prompt ({prompt, isLoading, setPrompt, handleSubmit}: Props) {
  const { t } = useTranslation();

  const onClose = () => setPrompt('');

  return (
    <>
      <div 
        id="prompt-container"
        data-testid="prompt-container"
        className="flex items-center justify-center px-8 dark:text-white">
        <form onSubmit={handleSubmit} className="gap-2 w-full grid grid-cols-5 lg:grid-cols-1 items-center">
          <div
            className="flex px-2 w-full items-center col-span-3 h-16 shadow-xl focus:shadow-3xl rounded-full border-2 hover:border-purple-400 dark:bg-slate-900">
            <SearchSvg className="h-7 w-7 fill-purple-400" />
            <input
              id="prompt-input"
              data-testid="prompt-input" 
              type="text"
              value={prompt}
              name="prompt"
              onChange={(e) => setPrompt(e.target.value)}
              className="grow focus:outline-none dark:bg-slate-900 animate-pulse" 
              placeholder={t('ask me anything')}
              maxLength={100}
              required />
            <CloseSvg role="button" className="h-6 w-6 mr-2 hover:scale-125" onClick={onClose} />
          </div>           
          <div className="col-span-2 grid grid-cols-3 gap-2">
            <div className="col-span-2 flex flex-col text-sm gap-2 border-2 border-neutral-200 
            hover:border-purple-400 dark:bg-slate-900 shadow-md rounded-lg p-2">
              <label htmlFor="model-select" className="text-sm">{t('choose a model')}</label>
              <select id="model-select" className="dark:bg-slate-900" name="model">
                <option value="davinci">Davinci</option>
                <option value="curie">Curie</option>
              </select>
            </div>
            <button id="prompt-submit-button"
              data-testid="prompt-submit-button" 
              type="submit" 
              className="md:text-sm bg-gradient-to-r from-blue-400 to-purple-500 
              hover:from-pink-500 hover:to-yellow-500 shadow-md focus:shadow-xl rounded-lg p-2 font-medium
              flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading && (<LoadingSvg className="h-7 w-7 animate-spin" />)}
              {!isLoading && t('submit')}
            </button>
          </div>
        </form> 
      </div>
    </>
  );
}