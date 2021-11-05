import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  // const someText = screen.getByText(/some/i);
  const h2Element = screen.queryByText(/h2/i);
  // expect(someText).toBeInTheDocument();
  await waitFor(() => {
    expect(h2Element).toBeNull()
    });
});
