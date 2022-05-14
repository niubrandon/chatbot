import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
interface Props {
  prompt: string
  setPrompt: (value: string) => void
  handleSubmit: (event: any) => void
}

export default function Prompt ({prompt, setPrompt, handleSubmit}: Props) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // console.log('Question is', prompt);
  }, [prompt]);

  return (
    <>
      <div 
        id="prompt-container"
        data-testid="prompt-container"
        className="flex items-center justify-center px-8">
        <form onSubmit={handleSubmit} className="gap-2 w-full grid grid-cols-5 lg:grid-cols-1 items-center">
          <input 
            type="text"
            value={prompt}
            name="prompt"
            onChange={(e) => setPrompt(e.target.value)}
            className="col-span-3 shadow-xl focus:shadow-3xl rounded-xl h-16 hover:border-purple-400" 
            placeholder="Ask me anything" />
          <div className="col-span-2 grid grid-cols-3 gap-2">
            <div className="col-span-2 flex flex-col text-sm gap-2 border-2 border-neutral-200 
            hover:border-purple-400 shadow-md rounded-lg p-2">
              <label htmlFor="model-select" className="text-sm">{t('choose a model')}</label>
              <select id="model-select" name="model">
                <option value="davinci">Davinci</option>
                <option value="curie">Curie</option>
              </select>
            </div>
            <button type="submit" className="md:text-sm bg-gradient-to-r from-blue-400 to-purple-500 hover:from-pink-500 hover:to-yellow-500 shadow-md focus:shadow-xl rounded-lg p-2 font-medium">{t('submit')}</button>
          </div>
        </form> 
      </div>
    </>
  );
}