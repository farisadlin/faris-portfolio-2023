import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Contact from '../../components/Contact';

describe('Contact', () => {
  it('renders the contact section', () => {
    render(<Contact />);

    // Check if the section title is present
    expect(screen.getByText("What's Next?")).toBeInTheDocument();
  });

  it('renders the contact heading', () => {
    render(<Contact />);
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  it('renders the contact button', () => {
    render(<Contact />);
    const button = screen.getByLabelText('Send me an email (opens in default email client)');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', 'mailto:farisnura@gmail.com');
  });
});
