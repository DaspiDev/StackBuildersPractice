import { render, screen } from '@testing-library/react';
import ItemsList from './ItemsList';

test('renders itemsList component', async () => {
  render(<ItemsList />);
  const listLayout = await screen.findByTestId('list-layout');
  expect(listLayout).toBeInTheDocument();
});

test('has data', async () => {
    const mockData = [
        {title: 'Fourteen Years of Go', orderNumber: 1, commentsNumber: 8, points: 37}, 
        {title: 'Testing Data with ReactJS', orderNumber: 2, commentsNumber: 20, points: 15}];
    const mockShowMore = [];
    const mockSetShowMore = () => {mockShowMore = [0]};
    const mockSetShowLess = () => {mockShowMore = []};
    const mockLoadingServerData = false;
    render(<ItemsList serverData={mockData} showMore={mockShowMore} setShowMore={mockSetShowMore} loadingServerData={mockLoadingServerData} />);
    const itemCard = await screen.findAllByTestId('itemCard');
    expect(itemCard.length).toBe(2);
});

