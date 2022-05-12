import { useEffect, useState } from 'react';

export default function Prompt () {
  const [prompt, setPrompt] = useState('');
  const axios = require('axios');

  useEffect(() => {
    // console.log('Question is', prompt);
  }, [prompt]);

  function handleSubmit(event: any) {
    event?.preventDefault();
    console.log('##form data', event.target.prompt.value);
    //http request
    const url = 'https://api.openai.com/v1/engines/text-davinci-002/completions';
    const data = {
      'prompt': prompt,
      'temperature': 0.9,
      'max_tokens': 150,
      'top_p': 1,
      'frequency_penalty': 0,
      'presence_penalty': 0.6,
      'stop': [' Human:', ' AI:']
    };
    //const api_key= process.env.API_KEY;
    const api_key = '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';
    axios.post(url, data, {
      headers: {
        'Authorization': `Bearer ${api_key}`
      }
    }).then((res: any) => {
      console.log('###GET REQUEST RESPONSE', res.data);
    }).catch((error: any) => {
      console.log('###GET REQUEST ERROR', error);
    })
    ;
  }

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