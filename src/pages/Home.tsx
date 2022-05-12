import PromptForm from '../components/PromptForm';
import PresetView from '../views/PresetView';
import CollectionView from '../views/CollectionView';

export default function Home () {

  return (
    <>
      <div className="text-xl font-bold pt-6">
        <PromptForm />
        <PresetView />
        <CollectionView />
      </div>
    </>
  );
}