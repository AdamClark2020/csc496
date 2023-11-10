import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

// Styled components for styling
const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center; /* Centering the elements horizontally */
  align-items: flex-start;
  text-align: center; /* Centering text within the container */
  background-color: #f5e5d7; /* Rustic background color for the instructions */
  padding: 20px;
`;

const ImageWrapper = styled.div`
  background-color: #804000; /* Rustic color */
  padding: 10px; /* Padding to create a border effect */
  display: inline-block; /* Ensure the background doesn't stretch the entire container */
`;

const Image = styled.img`
  max-width: 400px; /* Max width set to 400 pixels */
  height: 400px; /* Fixed height of 400 pixels */
`;

const LeftSide = styled.div`
  max-width: 50%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h4`
  color: #333;
`;

const BoldParagraph = styled.p`
  color: #555;
  font-weight: bold; /* Making text elements bold */
`;

const IngredientList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%; /* Added for width consistency */
`;

const IngredientItem = styled.li`
  margin-bottom: 5px;
  background: #f9d8b5; /* Calm orange background */
  padding: 5px;
  width: 100%; /* Added for width consistency */
`;

const RecipeTitle = styled.h2`
  font-size: 24px;
  color: #333;
`;

const PageTitle = styled.h4`
  font-size: 24px;
  color: #333;
`;

const RecipeInstructions = styled.div`
  background: #fff;
  padding: 20px;
  font-family: 'Georgia', serif; /* Sample font for a rustic feel */
`;

const StyledOrderedListItem = styled.ol`
  list-style: none;
  counter-reset: my-awesome-counter;
  font-size: 1.2em; /* Making the numbers a bit bigger */
`;

const StyledListItem = styled.li`
  counter-increment: my-awesome-counter;
  &:before {
    content: counter(my-awesome-counter) '. ';
    color: #8b0000; /* Rustic red color for numbers */
  }
`;

const DifficultyImage = styled.img`
  height: 20px; /* Set the image height */
  margin-right: 5px; /* Provide a small margin to separate from the text */
`;

const CookingTimeImage = styled.img`
  height: 20px; /* Set the image height */
  margin-right: 5px; /* Provide a small margin to separate from the text */
`;
const PreparationTimeImage = styled.img`
  height: 20px; /* Set the image height */
  margin-right: 5px; /* Provide a small margin to separate from the text */
`;
const ServingsImage = styled.img`
  height: 20px; /* Set the image height */
  margin-right: 5px; /* Provide a small margin to separate from the text */
`;

const pageTemplate = props => {
  const { data } = props.pageContext;

  if (!data || !data.title) {
    console.error('Data is not available:', data);
    return <p>Data is not available</p>;
  }

  const {
    title,
    mediaImage,
    difficulty,
    cookingTime,
    preparationTime,
    numberOfServings,
    ingredients,
    recipeInstruction,
  } = data;

  return (
    <Container>
      <LeftSide>
        {mediaImage && mediaImage.mediaImage && (
          <div>
            <ImageWrapper>
              <Image src={mediaImage.mediaImage.url} alt="Food Image" />
            </ImageWrapper>
            <Title>Ingredients needed for the recipe</Title>
            <IngredientList>
              {ingredients && ingredients.map((ingredient, index) => (
                <IngredientItem key={index}>{ingredient}</IngredientItem>
              ))}
            </IngredientList>
          </div>
        )}
      </LeftSide>

      <div>
        <PageTitle>{title}</PageTitle>
        <BoldParagraph>
          <DifficultyImage src="https://csc496f22demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/difficulty.svg" alt="Difficulty icon" />
          Difficulty: {difficulty}
        </BoldParagraph>
        <BoldParagraph>
          <CookingTimeImage src="https://csc496f22demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/timer.svg" alt="Cooking time icon" />
          Cooking Time: {cookingTime}
        </BoldParagraph>
        <BoldParagraph>
          <PreparationTimeImage src="https://csc496f22demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/knife.svg" alt="Knife icon" />
          Preparation Time: {preparationTime}
        </BoldParagraph>
        <BoldParagraph>
          <ServingsImage src="https://csc496f22demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/serves.svg" alt="Serves icon" />
          Servings: {numberOfServings}
        </BoldParagraph>
        
        <RecipeTitle>Recipe Instruction</RecipeTitle>
        <RecipeInstructions>
          <StyledOrderedListItem>
            {recipeInstruction && recipeInstruction.processed && (
              <StyledListItem dangerouslySetInnerHTML={{ __html: recipeInstruction.processed }} />
            )}
          </StyledOrderedListItem>
        </RecipeInstructions>
      </div>
    </Container>
  );
};

export default pageTemplate;