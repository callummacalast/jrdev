import React from 'react';
import { client } from '../lib/apollo';
import { gql } from '@apollo/client';
import Link from 'next/link';
import { useEffect } from 'react';

const posts = ({ posts, categories, cat_posts, posts_by_cat }) => {
console.log(posts_by_cat);
useEffect(() => {
  let category = document.querySelector("#cats option");
  console.log(category.value)
}, []);

  return (
    <>
      <section className="py-6 sm:py-12 bg-gray-800 text-gray-100">
        <h2 className="text-xl font-extrabold text-center">
          Blog<span className="text-violet-400">.</span>
        </h2>
        <select id="cats">
          <option name="job-search" value="job-search">
            job search
          </option>
        </select>


        <div className="container p-6 mx-auto space-y-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {posts.map((post, index) => {
              let mydate = new Date(post.date);
              let postDate = new Date(mydate).toLocaleDateString();
              return (
                <Link key={index} href={`/posts${post?.uri}`}>
                  <article className="flex flex-col bg-gray-900 hover:animate-pulse">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      aria-label={post.categories.nodes.map((cat) => `${cat.name}, `)}

                    >
                      {post.featuredImage ? (
                        <img
                          alt=""
                          className="object-cover w-full h-52 bg-gray-500"
                          // src="https://source.unsplash.com/200x200/?fashion?1"
                          src={post?.featuredImage?.node?.sourceUrl}
                        />
                      ) : (
                        <img
                          alt=""
                          className="object-cover w-full h-52 bg-gray-500"
                          src="/img/surfing.jpg"
                          // src={post?.featuredImage?.node?.sourceUrl}
                        />
                      )}
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        aria-label="Te nulla oportere reprimique his dolorum"
                      ></a>
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="text-xs tracking-wider uppercase text-violet-400"
                      >
                        {post.categories.nodes.map((cat) => `${cat.name}, `)}
                      </a>
                      <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                        {post?.title}
                      </h3>
                      <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                        <span>{postDate}</span>
                        {/* <span>2.1K views</span> */}
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default posts;

export async function getStaticProps() {
  const GET_POSTS = gql`
    query GetAllPosts {
      posts {
        nodes {
          title
          content
          uri
          date
          excerpt
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
              uri
            }
          }
        }
      }
    }
  `;



  const POSTS_BY_CAT = gql`
  query MyQuery2 {
    posts(where: {categoryName: ""}) {
      nodes {
        title
      }
    }
  }
  `;

  const GET_CATEGORIES = gql`
    query GetAllCategories {
      categories {
        edges {
          node {
            id
            slug
            name
            uri
          }
        }
      }
    }
  `;

  const GET_SINGLE_CAT = gql`
    query NewQuery {
      posts(where: { categoryName: "code" }) {
        nodes {
          date
          excerpt
          link
          title
        }
      }
    }
  `;

  const cat_res = await client.query({
    query: GET_SINGLE_CAT,
  });

  const posts_cat = await client.query({
    query: POSTS_BY_CAT,
  });
  const res = await client.query({
    query: GET_CATEGORIES,
  });
  const response = await client.query({
    query: GET_POSTS,
  });

  const categories = res?.data?.categories?.edges;
  const posts = response?.data?.posts?.nodes;
  const cat_posts = cat_res?.data?.posts?.nodes;
  const posts_by_cat = posts_cat?.data?.posts.nodes;
  return {
    props: {
      posts,
      categories,
      cat_posts,
      posts_by_cat,
    },
    revalidate: 10,
  };
}
