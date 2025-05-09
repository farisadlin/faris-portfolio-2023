import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Works from '../../components/Works';

describe('Works', () => {
  it('renders the works section', () => {
    render(<Works />);

    // Check if the section title is present
    expect(screen.getByText("Some things I've Built")).toBeInTheDocument();
  });

  it('renders featured projects', () => {
    render(<Works />);
    expect(screen.getAllByText('Featured Project')[0]).toBeInTheDocument();
  });

  it('renders project descriptions', () => {
    render(<Works />);
    expect(
      screen.getByText(/Led the development of a comprehensive landing page/i)
    ).toBeInTheDocument();
  });

  it('renders project tech stack', () => {
    render(<Works />);
    expect(screen.getAllByText(/NEXT.JS/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/TYPESCRIPT/i)[0]).toBeInTheDocument();
  });
});
