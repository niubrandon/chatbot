import {render, fireEvent, screen} from '@testing-library/react';
import Header from '../Header';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {BrowserRouter} from 'react-router-dom';

describe('<Header />', () => {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: {
            'about': 'About',
            'home': 'Home',
            'favorites': 'Favorites',
          }
        }
      },
      lng: 'en', 
      fallbackLng: 'en',
  
      interpolation: {
        escapeValue: false
      }
    });
  
  it.skip('renders header without crashing', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>);
    const modeSwitch = screen.getByTestId('mode-switch-container');
    const languageSelector = screen.getByTestId('language-switch-container');
    expect(modeSwitch).toBeInTheDocument();
    expect(languageSelector).toBeInTheDocument();
  });

});