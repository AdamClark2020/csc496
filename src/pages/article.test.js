import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Article from './article';

describe('Article Component', () => {
  const mockData = {
    title: 'Test Article',
    author: { displayName: 'John Doe' },
    body: { processed: '<p>Test article content</p>' },
    mediaImage: { mediaImage: { url: 'test-image.jpg' } },
  };

  it('renders with the provided data', () => {
    const { getByText, getByAltText } = render(<Article pageContext={{ data: mockData }} />);
    expect(getByText('Test Article')).toBeInTheDocument();
    expect(getByText('Author: John Doe')).toBeInTheDocument();
    expect(getByText('Test article content')).toBeInTheDocument();
    expect(getByAltText('Test Article')).toBeInTheDocument();
  });

  it('renders an error message for missing or incomplete data', () => {
    const { getByText } = render(<Article pageContext={{}} />);
    expect(getByText('Article data is not available')).toBeInTheDocument();
  });

  it('renders without author when author data is not provided', () => {
    const dataWithoutAuthor = { ...mockData, author: null };
    const { queryByText } = render(<Article pageContext={{ data: dataWithoutAuthor }} />);
    
    // Check if the element with "Author: Unknown" is present
    expect(queryByText('Author: Unknown')).toBeInTheDocument();
    
  });
  

  it('renders without media image when mediaImage is not provided', () => {
    const dataWithoutMediaImage = { ...mockData, mediaImage: null };
    const { queryByAltText } = render(<Article pageContext={{ data: dataWithoutMediaImage }} />);
    expect(queryByAltText('Test Article')).toBeNull();
  });


});