import Link from 'next/link'

export default function PostCard({ post }) {
  console.log(post)
  return (
    <Link href={`/posts/${post.uri}`} className={'card'}>
      <div className="w-full md:w-1/2 lg:w-1/3 px-4">
        <div className="max-w-[370px] mx-auto mb-10">
          <div className="rounded overflow-hidden mb-8">
            <img
              src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
              alt="image"
              className="w-full"
            />
          </div>
          <div>
            <span
              className="
                         bg-blue-500
                         rounded
                         inline-block
                         text-center
                         py-1
                         px-4
                         text-xs
                         leading-loose
                         font-semibold
                         text-dark
                         mb-5
                         "
            >
              {post.date}
            </span>
            <h3 className="text-dark">{post.title}</h3>
            <p
              className="text-base text-body-color"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
