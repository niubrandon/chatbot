import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import ModeSwitch from '../components/ModeSwitch';
import { debug } from 'console';

describe('<ModeSwitch />', () => {

  it.skip('renders mode switch without crashing', () => {
    render(<ModeSwitch />);
    window.localStorage.theme='light';
    const lightMode = screen.getByTestId('mode-switch-light');
    const darkMode = screen.getByTestId('mode-switch-dark');
    expect(lightMode).toBeInTheDocument();
    expect(darkMode).toBeInTheDocument();
  });

  it.skip('toggle to dark mode when dark mode is clicked', async () => {
    render(<ModeSwitch />);

    const darkMode = screen.getByTestId('mode-switch-dark');
    
    fireEvent.click(darkMode);
    expect(darkMode).toBeInTheDocument();
    screen.debug();
  });

});