import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import About from '../../components/About';

describe('About', () => {
  it('renders the about section', () => {
    render(<About />);

    // Check if the section title is present
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders the profile image', () => {
    render(<About />);
    expect(
      screen.getByAltText('Faris Adlin - Software Engineer and Front-end Developer')
    ).toBeInTheDocument();
  });

  it('renders the about text content', () => {
    render(<About />);
    expect(
      screen.getByText(/Faris has always been passionate about the IT world/i)
    ).toBeInTheDocument();
  });
});
