import { render, screen } from '@testing-library/react';
import Accueil from './Accueil';

test('renders learn react link', () => {
  render(<Accueil />);
  const linkElement = screen.getByText(/Accueil/i);
  expect(linkElement).toBeInTheDocument();
});
