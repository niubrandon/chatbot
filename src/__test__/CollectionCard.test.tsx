import {render, screen} from '@testing-library/react';
import CollectionCard from '../components/CollectionCard';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

describe('<CollectionCard />', () => {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: {
            'Welcome to React': 'Welcome to React and react-i18next'
          }
        }
      },
      lng: 'en', 
      fallbackLng: 'en',

      interpolation: {
        escapeValue: false
      }
    });

  const data = {prompt: 'What\'s your name?', response: '↵↵My name is Samantha.', postedOn: '2022-05-13'};

  it('renders collection card without crashing', () => {
    render(<CollectionCard item={data} />);
    //screen.debug();
  });

});