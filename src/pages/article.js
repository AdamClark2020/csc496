import React from 'react';
import styled from 'styled-components';

const CenteredTitle = styled.h1`
  text-align: center;
`;

const Author = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
  font-family: 'Minimalist Font', sans-serif;
`;

const CenteredContainer = styled.div`
  text-align: center;
  padding: 0 15%;
  background: #f5f0ff; 
  max-width: 70%; /* Limiting the width of the container */
  margin: auto; /* Centering the container horizontally */

  h2,
  h3,
  h4,
  h5 {
    font-family: 'Slim Font', cursive;
    font-weight: 300;
  }
`;

const Article = (props) => {
  const data = props.pageContext.data;
  if (!data || !data.title || !data.body) {
    console.error('Article data is not available:', data);
    return <p>Article data is not available</p>;
  }

  return (
    <div style={{ background: '#d5f1e3' }}> {}
      <CenteredTitle>{data.title}</CenteredTitle>
      <Author>Author: {data.author?.displayName}</Author>
      <CenteredContainer>
        <div dangerouslySetInnerHTML={{ __html: data.body.processed }} />
      </CenteredContainer>
      <img
        src={data.mediaImage?.mediaImage?.url}
        alt={data.title}
        style={{
          display: 'block',
          margin: 'auto',
          border: '20px solid #8d5524', 
        }}
      />
    </div>
  );
};

export default Article;