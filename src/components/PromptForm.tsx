import { useEffect, useState } from 'react';
interface Props {
  prompt: string
  setPrompt: (value: string) => void
  handleSubmit: (event: any) => void
}

export default function Prompt ({prompt, setPrompt, handleSubmit}: Props) {

  useEffect(() => {
    // console.log('Question is', prompt);
  }, [prompt]);

  return (
    <>
      <div 
        id="prompt-container"
        data-testid="prompt-container"
        className="flex items-center justify-center">
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={prompt}
            name="prompt"
            onChange={(e) => setPrompt(e.target.value)}
            className="shadow-xl focus:shadow-3xl rounded-xl w-[400px] h-12" 
            placeholder="Ask me anything" />
        </form> 
      </div>
    </>
  );
}