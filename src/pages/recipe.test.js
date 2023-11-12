import React from 'react';
import { render } from '@testing-library/react';
import PageTemplate from '../../src/pages/recipe'; 

describe('PageTemplate component', () => {
  test('Renders the title element', () => {
    const mockData = {
      title: 'SUUPRDEEP mediterranean quiche',
    };

    const { getByText } = render(<PageTemplate pageContext={{ data: title }} />);

    const titleElement = getByText('SUUPRDEEP mediterranean quiche');
    expect(titleElement).toBeInTheDocument();
  });
});