import {render, fireEvent, screen} from '@testing-library/react';
import PresetQuestion from '../components/PresetQuestion';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

describe('<PresetQuestion />', () => {

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

  const question = 'What\'s your name?';

  it('render a preset question without crashing', () => {
    const setPrompt = jest.fn();
    render(<PresetQuestion question={question} setPrompt={setPrompt} />);
    const presentQuestion = screen.getByTestId('preset-question-container');
    expect(presentQuestion).toHaveTextContent('What\'s your name?');
  
  });

  it('setPrmopt is called after the question is clicked', () => {
    const setPrompt = jest.fn();
    render(<PresetQuestion question={question} setPrompt={setPrompt} />);
    const presentQuestion = screen.getByTestId('preset-question-container');   
    fireEvent.click(presentQuestion);
    expect(setPrompt).toBeCalled();
  });

});