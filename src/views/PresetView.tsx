import PresetQuestion from '../components/PresetQuestion';

interface Props {
  setPrompt: (value: string) => void
}

export default function PresetView ({setPrompt}: Props) {

  const presetQuestions = [
    'What\'s your name?', 
    'Translate hello to Chinese', 
    'How many states are in the USA?', 
    'What music do you like?',
    'How do you make chicken noodle soup?',
    'What\'s the name of the prime minister of Canada?'
  ];

  const Questions = presetQuestions.map((item, index) => {
    return (
      <PresetQuestion question={item} id={index} key={index} setPrompt={setPrompt} />
    );
  });
  
  return (
    <>
      <div id="preset-questions-container"
        data-testid="preset-questions-container"
        className="grid grid-cols-3 gap-2 p-4 rounded-lg shadow-lg dark:bg-black
        md:grid-cols-2 xs:grid-cols-1 bg-neutral-100" >
        {Questions}
      </div>
    </>
  );
}