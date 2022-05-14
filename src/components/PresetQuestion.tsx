import ReactTooltip from 'react-tooltip';
interface Props {
  question: string
  setPrompt: (value: string) => void
}

export default function PresetQuestion ({question, setPrompt}: Props) {

  function onPresetQuestion() {
    setPrompt(question);
  }
  return (
    <>
      <div
        id="preset-question-container" 
        data-testid="preset-question-container" 
        className="realtive w-full text-sm h-fit border-2 border-neutral-200 rounded-lg flex justify-between 
      gap-2 shadow-md hover:border-purple-300 hover:shadow-xl dark:bg-gray-800 dark:text-white p-2 cursor-pointer"
        onClick={onPresetQuestion}>
        <div>
          <p data-tip="Try this one as prompt!">{question} </p>
          <ReactTooltip />
        </div>    
      </div>
    </>
  );
}