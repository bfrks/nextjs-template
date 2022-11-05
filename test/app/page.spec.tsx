import { screen, render } from '@testing-library/react';
import Home from '@app/page';

describe('Page: Home', () => {
  it('should render the homepage', () => {
    render(<Home />);
    expect(screen.queryByText('Hello World!')).toBeInTheDocument();
  });
});
