import {render, fireEvent, screen} from '@testing-library/react';
import ModeSwitch from '../ModeSwitch';


describe('<ModeSwitch />', () => {
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };

  };
  
  it('renders mode switch without crashing', () => {
    render(<ModeSwitch />);
    window.localStorage.theme='light';
    const lightMode = screen.getByTestId('mode-switch-light');
    const darkMode = screen.getByTestId('mode-switch-dark');
    expect(lightMode).toBeInTheDocument();
    expect(darkMode).toBeInTheDocument();
  });

  it('toggle to dark mode or light mode when corresponding mode is clicked', async () => {
    render(<ModeSwitch />);
    const darkMode = screen.getByTestId('mode-switch-dark');   
    const lightMode = screen.getByTestId('mode-switch-light');
    fireEvent.click(darkMode);
    expect(window.localStorage.theme).toEqual('dark');
    fireEvent.click(lightMode);
    expect(window.localStorage.theme).toEqual('light');
  });

});