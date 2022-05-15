import { useState } from 'react';
import ReactTooltip from 'react-tooltip';
interface Props {
  id: number
  question: string
  setPrompt: (value: string) => void
}

export default function PresetQuestion ({id, question, setPrompt}: Props) {

  // temporary fix to add tooltip state and mouse events because the react-tooltip library does not support React 18
  // https://github.com/wwayne/react-tooltip/issues/769
  const [tooltip, showTooltip] = useState(true);

  const onPresetQuestion = () => {
    setPrompt(question);
  };
  return (
    <>
      <div
        id="preset-question-container" 
        data-testid="preset-question-container" 
        className="realtive w-full text-sm h-fit border-2 border-neutral-200 rounded-lg flex justify-between 
      gap-2 shadow-md hover:border-purple-300 hover:shadow-xl dark:bg-gray-800 dark:text-white p-2 cursor-pointer"
        data-tip
        data-for={`preset-question-${id}`}
        onMouseEnter={() => showTooltip(true)}
        onMouseLeave={() => {
          showTooltip(false);
          setTimeout(() => showTooltip(true), 50);
        }}
        onClick={onPresetQuestion}>
        <p>{question}</p>     
      </div>
      { tooltip && <ReactTooltip id={`preset-question-${id}`} effect="solid" type='info' globalEventOff='click'>
        <span>Try this one as a prompt!</span>
      </ReactTooltip> }
    
    </>
  );
}