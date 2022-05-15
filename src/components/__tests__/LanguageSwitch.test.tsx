import { render, fireEvent, screen } from '@testing-library/react';
import LanguageSwitch from '../LanguageSwitch';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

describe('<LanguageSwitch />', () => {
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

  it('renders language switch without crashing', () => {
    render(<LanguageSwitch />);
    const buttonEnglish = screen.getByTestId('language-switch-en');
    const buttonFrench = screen.getByTestId('language-switch-fr');
    expect(buttonEnglish).toBeInTheDocument();
    expect(buttonFrench).toBeInTheDocument();
  });

  it('English button is enabled and French button is disabled after fr button is clicked', () => {
    render(<LanguageSwitch />);
    const buttonEnglish = screen.getByTestId('language-switch-en');
    const buttonFrench = screen.getByTestId('language-switch-fr');
    fireEvent.click(buttonFrench);
    expect(buttonFrench).toBeDisabled();
    expect(buttonEnglish).toBeEnabled();
  });
});