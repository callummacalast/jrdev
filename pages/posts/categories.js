import { gql } from '@apollo/client';
import React from 'react';
import { client } from '../../lib/apollo';

const categories = (categories) => {
  console.log(categories);
  return <div>categories</div>;
};

export default categories;

export async function getStaticProps() {
  const GET_CATS = gql`
    query getAllCats {
      categories {
        edges {
          node {
            id
            name
            link
            slug
            uri
            taxonomyName
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_CATS,
  });
  const cats = response?.data?.categories?.edges;
  return {
    props: {
      cats,
    },
  };
}
