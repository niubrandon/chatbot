import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      'about': 'About',
      'submit': 'Submit',
      'collection': 'Collection',
      'prompt': 'Prompt',
      'response': 'Response',
      'choose a model': 'Choose a model',
      'running out of ideas': 'Running out of ideas'
    }
  },
  fr: {
    translation: {
      'about': 'Sur',
      'submit': 'Soumettre',
      'collection': 'Le recueil',
      'prompt': 'Rapide',
      'response': 'Réponse',
      'choose a model': 'Choisi un modèle',
      'running out of ideas': 'Manquer d\'idées'
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'fr', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;