import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


export default function LanguageSwitch () {

  const { i18n } = useTranslation();
  
  useEffect(() => {
    if (localStorage.language === 'fr') {
      i18n.changeLanguage('fr');
    }
  }, []);

  const onEnglish = () => {
    window.localStorage.language='en';
    i18n.changeLanguage('en');
  };

  const onFrench = () => {
    window.localStorage.language='fr';
    i18n.changeLanguage('fr');
  };

  return (
    <>
      <div
        id="language-switch-container"
        data-testid="language-switch-container"
        className="flex gap-1 border-2 border-neutral-300 rounded-lg p-1 focus:border-purple-400">
        <button
          id="language-switch-en"
          data-testid="language-switch-en"
          onClick={onEnglish}
          className="w-5 h-5 disabled:text-gray-200"
          disabled={i18n.language==='en'}>
            EN
        </button>
        <span>|</span>
        <button
          id="language-switch-fr"
          data-testid="language-switch-fr"
          onClick={onFrench}
          className="w-5 h-5 disabled:text-gray-200"
          disabled={i18n.language==='fr'}>
            FR
        </button>       
      </div>
    </>
  );
}