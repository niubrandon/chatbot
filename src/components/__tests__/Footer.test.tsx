import { render, fireEvent, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('<Footer />', () => {

  it('renders footer without crashing', () => {
    render(<Footer />);
    const link = screen.getByTestId('profile-link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Brandon');
  });

});