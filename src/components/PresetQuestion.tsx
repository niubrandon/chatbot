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
        className="realtive w-full text-sm h-fit border-2 border-neutral-200 rounded-lg flex justify-between 
      gap-2 shadow-md hover:border-purple-300 hover:shadow-xl dark:bg-black dark:text-white p-2 cursor-pointer"
        onClick={onPresetQuestion}>
        <div>
          <p>{question} </p>
        </div>    
      </div>
    </>
  );
}