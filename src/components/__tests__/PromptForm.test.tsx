import { render, fireEvent, screen } from '@testing-library/react';
import PromptForm from '../PromptForm';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

describe('<PromptForm />', () => {

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

  const prompt = '';
  it('renders a prompt form without crashing', () => {
    const setPrompt = jest.fn();
    const handleSubmit = jest.fn();
    render(<PromptForm prompt={prompt} setPrompt={setPrompt} handleSubmit={handleSubmit} isLoading={false} />);
    const form = screen.getByTestId('prompt-container');
    expect(form).toBeInTheDocument();
  
  });

  it('calls handleSubmit after the submit button is clicked', () => {
    const setPrompt = jest.fn();
    const handleSubmit = jest.fn(e => e.preventDefault());
    
    render(<PromptForm prompt={prompt} setPrompt={setPrompt} handleSubmit={handleSubmit} isLoading={false} />);

    const input = screen.getByTestId('prompt-input');
    const button = screen.getByTestId('prompt-submit-button');

    fireEvent.change(input, {target: {value: 'Who\'s the prime minister for Canada'}});
    fireEvent.click(button);

    expect(handleSubmit).toBeCalled();
  });

});