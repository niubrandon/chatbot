import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'about': 'About Me',
      'home': 'Home',
      'favorites': 'Favorites',
      'submit': 'Submit',
      'collection': 'Collection',
      'prompt': 'Prompt',
      'response': 'Response',
      'choose a model': 'Choose a model',
      'ask me anything': 'Ask me anything',
      'preset questions': 'Preset Questions',
      'reference': 'Reference',
      'engine': 'Engine',  
    }
  },
  fr: {
    translation: {
      'about': 'Sur Moi',
      'home': 'Domicile',
      'favorites': 'Favoris',
      'submit': 'Soumettre',
      'collection': 'Le recueil',
      'prompt': 'Rapide',
      'response': 'Réponse',
      'choose a model': 'Choisi un modèle',
      'ask me anything': 'Ask me anything',
      'preset questions': 'Questions Prédéfinies',
      'reference': 'Référence',
      'engine': 'Moteur',   
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;