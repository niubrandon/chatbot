import {render, screen, fireEvent} from '@testing-library/react';
import CollectionCard from '../CollectionCard';
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
  const handleFavorite = jest.fn();
  const data = {
    id:'11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' ,
    prompt: 'What\'s your name?', response: '↵↵My name is Samantha.', 
    postedOn: '2022-05-13', 
    isFavorite: false, 
    model: 'Davinci'
  };

  it('renders collection card without crashing', () => {
    render(<CollectionCard item={data} handleFavorite={handleFavorite} />);
    const span = screen.getByTestId('collection-id');
    expect(span).toBeInTheDocument();
    expect(span).toHaveTextContent('11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000');
  });

  it('it add the collection to favorite when favorite tag is clicked', () => {
    render(<CollectionCard item={data} handleFavorite={handleFavorite} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleFavorite).toBeCalled();
  });

});