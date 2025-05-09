import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Nav from '../../components/Nav';

describe('Nav', () => {
  it('renders navigation links', () => {
    render(<Nav />);

    // Check if all navigation links are present
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders logo', () => {
    render(<Nav />);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });

  it('renders resume button', () => {
    render(<Nav />);
    expect(screen.getByText('Resume')).toBeInTheDocument();
  });
});
