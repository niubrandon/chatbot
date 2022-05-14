import { useEffect, useState } from 'react';
import { ReactComponent as DarkSvg } from '../assets/moon-solid.svg';
import { ReactComponent as LightSvg } from '../assets/sun-solid.svg';

export default function ModeSwitch () {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  function onLightMode () {
    window.localStorage.theme='light';
    setTheme('light');
  }

  function onDarkMode () {
    window.localStorage.theme='dark';
    setTheme('dark');
  }

  return (
    <>
      <div
        id="mode-switch-container"
        data-testid="mode-switch-container"
        className="flex gap-1 border-2 border-neutral-300 rounded-lg p-1 focus:border-purple-400">
        <LightSvg
          id="mode-switch-light"
          data-testid="mode-switch-light"
          role="button" 
          onClick={onLightMode}
          className={`w-5 h-5 cursor-pointer ${theme==='light' ? 'fill-gray-700' : 'fill-amber-400'}`} />
        <DarkSvg
          id="mode-switch-dark"
          data-testid="mode-switch-dark"
          role="button"  
          onClick={onDarkMode}
          className={`w-5 h-5 cursor-pointer ${theme==='dark' ? 'fill-gray-700' : 'fill-sky-700'}`} />        
      </div>
    </>
  );
}