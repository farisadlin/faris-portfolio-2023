import { render, screen } from '@testing-library/react';
import Experiences from '../../components/Experiences';

describe('Experiences', () => {
  it('renders the experience section', () => {
    render(<Experiences />);

    // Check if the section title is present
    expect(screen.getByText('My Experiences')).toBeInTheDocument();
  });

  it('renders the timeline heading', () => {
    render(<Experiences />);
    expect(screen.getByText('Timeline')).toBeInTheDocument();
  });

  it('renders job titles', () => {
    render(<Experiences />);
    expect(screen.getByText(/Lead Front End Developer/i)).toBeInTheDocument();
  });

  it('renders job descriptions', () => {
    render(<Experiences />);
    expect(screen.getByText(/Led a team of four front-end developers/i)).toBeInTheDocument();
  });
});
