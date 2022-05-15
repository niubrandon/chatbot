import PromptForm from '../components/PromptForm';
import PresetView from '../views/PresetView';
import CollectionView from '../views/CollectionView';
import { ReactComponent as CollectionSvg } from '../assets/grip-solid.svg';
import { ReactComponent as PresetQuestionSvg } from '../assets/bolt-solid.svg';
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
    prompt: string
    isLoading: boolean
    collection: Collection[]
    setPrompt: (value: string) => void
    handleSubmit: (event: any) => void
    handleFavorite: (value: Collection) => void
  }

export default function Home ({prompt, setPrompt, isLoading, collection, handleFavorite, handleSubmit}: Props) {

  const { t, i18n } = useTranslation();
 
  return (
    <>
      <div className="text-xl font-bold pt-6 pb-8 dark:text-white flex flex-col gap-4">
        <PromptForm prompt={prompt} setPrompt={setPrompt} handleSubmit={handleSubmit} isLoading={isLoading} />
        <section className="flex flex-col" aria-labelledby="questions">
          <title className="flex ml-2 gap-2">
            <PresetQuestionSvg className="h-7 w-7 dark:fill-white" />
            <h2 id="questions" className="ml-4">{t('preset questions')}</h2>
          </title>   
          <PresetView setPrompt={setPrompt}  />     
        </section>
        <section className="flex flex-col ml-2 gap-2" aria-labelledby="collection">
          <title className="flex ml-2 gap-2">
            <CollectionSvg className="h-7 w-7 dark:fill-white" />
            <h2 id="collection" className="ml-4">{t('collection')}</h2>   
          </title>
          <CollectionView collection={collection} handleFavorite={handleFavorite} />      
        </section>    
      </div>
    </>
  );
}