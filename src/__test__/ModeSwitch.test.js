import {render, fireEvent, screen} from '@testing-library/react';
import ModeSwitch from '../components/ModeSwitch';

describe('<ModeSwitch />', () => {

  it.skip('renders mode switch without crashing', () => {
    render(<ModeSwitch />);
    screen.debug();
    window.localStorage.theme='light';
    screen.debug();
    // const lightMode = screen.getByTestId('mode-switch-light');
    // const darkMode = screen.getByTestId('mode-switch-dark');
    // expect(lightMode).toBeInTheDocument();
    // expect(darkMode).toBeInTheDocument();
  });

  it.skip('toggle to dark mode when dark mode is clicked', async () => {
    render(<ModeSwitch />);

    const darkMode = screen.getByTestId('mode-switch-dark');
    
    fireEvent.click(darkMode);
    expect(darkMode).toBeInTheDocument();
    screen.debug();
  });

});