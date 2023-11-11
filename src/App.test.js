import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', async () => {
  render(<App />);
  const mainLayout = await screen.findByTestId('mainlayout');
  expect(mainLayout).toBeInTheDocument();
});

test('renders menu', async () => {
    render(<App />);
    const menu = await screen.findByTestId('menu');
    expect(menu).toBeInTheDocument();
})

