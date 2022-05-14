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
        className="flex items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input 
            type="text"
            value={prompt}
            name="prompt"
            onChange={(e) => setPrompt(e.target.value)}
            className="shadow-xl focus:shadow-3xl rounded-xl w-[400px] h-12" 
            placeholder="Ask me anything" />
          <div className="grid grid-cols-3">
            <div className="col-span-2 flex flex-col text-sm gap-2 border-2 border-neutral-200 shadow-md rounded-lg p-2">
              <label htmlFor="model-select" className="text-sm">{t('choose a model')}</label>
              <select id="model-select" name="model">
                <option value="davinci">Davinci</option>
                <option value="curie">Curie</option>
              </select>
            </div>
            <button type="submit" className="bg-purple-400 shadow-md focus:shadow-xl rounded-lg m-2 font-medium">{t('submit')}</button>
          </div>
        </form> 
      </div>
    </>
  );
}