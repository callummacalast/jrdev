import Head from 'next/head';
import Footer from '../../components/Footer';
import { getPostByUri } from '../../lib/test-data';
import { client } from '../../lib/apollo';
import { gql } from '@apollo/client';

export default function SlugPage({ post }) {
  return (
    <div className="single-post mx-5">
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">   {post.title}</a>
              <p className="text-xs dark:text-gray-400">By
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">{`${post.author.node.firstName} ${post.author.node.lastName}`}</a>
              </p>
            </div>
            <div className="dark:text-gray-100">
            <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const GET_POSTS_BY_URI = gql`
    query GetPostsByURI($id: ID!) {
      post(id: $id, idType: URI) {
        title
        content
        date
        uri
        author {
          node {
            firstName
            lastName
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POSTS_BY_URI,
    variables: {
      id: params.uri,
    },
  });
  const post = response?.data?.post;
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: 'blocking',
  };
}
