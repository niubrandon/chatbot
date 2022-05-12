import PresetQuestion from '../components/PresetQuestion';

export default function PresetView () {

  const presetQuestions = [
    'What\'s your name?', 
    'Translate hello in chinese', 
    'How many states in US?', 
    'What music do you like?',
    'How to make chicken noodle soup?',
    'What\'s the name of the prime minister for Canada?'
  ];
  const Questions = presetQuestions.map((item, index) => {
    return (
      <PresetQuestion question={item} key={index} />
    );
  });
  return (
    <>
      <div id="preset-questions-container"
        data-testid="preset-questions-container"
        className="grid grid-cols-3 gap-2 m-6 p-4 rounded-lg shadow-lg md:grid-cols-2 xs:grid-cols-1 bg-neutral-100" >
        {Questions}
      </div>
    </>
  );
}