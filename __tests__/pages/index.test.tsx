import { render, screen, fireEvent, act } from '@testing-library/react';
import Home from '../../pages/index';

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />);
    // Check if the intro animation is present
    expect(screen.getByTestId('intro-animation')).toBeInTheDocument();
  });

  it('shows main content after animation', async () => {
    render(<Home />);

    // Initially, main content should not be visible
    expect(screen.queryByRole('main')).not.toBeInTheDocument();

    // Simulate animation end
    const introAnimation = screen.getByTestId('intro-animation');
    await act(async () => {
      fireEvent.animationEnd(introAnimation);
    });

    // Now main content should be visible
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
