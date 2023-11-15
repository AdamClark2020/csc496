import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import PageTemplate from './recipe'; // Assuming your component file is named pageTemplate.js

describe('PageTemplate Component', () => {
  const mockData = {
    title: 'Test Recipe',
    mediaImage: { mediaImage: { url: 'test-image.jpg' } },
    difficulty: 'Easy',
    cookingTime: '30 minutes',
    preparationTime: '15 minutes',
    numberOfServings: 4,
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    recipeInstruction: { processed: '<p>Test instructions</p>' },
  };

  it('renders with the provided data', () => {
    const { getByText, getByAltText } = render(<PageTemplate pageContext={{ data: mockData }} />);

    // Check if elements with specific text or alt text are rendered
    expect(getByText('Test Recipe')).toBeInTheDocument();
    expect(getByAltText('Food Image')).toBeInTheDocument();
    expect(getByText('Difficulty: Easy')).toBeInTheDocument();
    expect(getByText('Cooking Time: 30 minutes')).toBeInTheDocument();
    expect(getByText('Preparation Time: 15 minutes')).toBeInTheDocument();
    expect(getByText('Servings: 4')).toBeInTheDocument();
    expect(getByText('Recipe Instruction')).toBeInTheDocument();
    expect(getByText('Ingredient 1')).toBeInTheDocument();
    expect(getByText('Ingredient 2')).toBeInTheDocument();
    expect(getByText('Test instructions')).toBeInTheDocument();
  });

  it('renders an error message for missing or incomplete data', () => {
    const { getByText } = render(<PageTemplate pageContext={{}} />);
    expect(getByText('Data is not available')).toBeInTheDocument();
  });

  it('renders without media image when mediaImage is not provided', () => {
    const dataWithoutMediaImage = { ...mockData, mediaImage: null };
    const { queryByAltText } = render(<PageTemplate pageContext={{ data: dataWithoutMediaImage }} />);
    expect(queryByAltText('Food Image')).toBeNull();
  });

  it('renders the heading even when ingredients array is empty', () => {
    const dataWithoutIngredients = { ...mockData, ingredients: [] };
    const { getByText } = render(<PageTemplate pageContext={{ data: dataWithoutIngredients }} />);
    expect(getByText('Ingredients needed for the recipe')).toBeInTheDocument();
  });

  // Add more test cases as needed
});