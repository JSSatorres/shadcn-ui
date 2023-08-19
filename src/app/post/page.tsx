import { PostCard } from '@/components/postCard/PostCard'

export interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
    .then(res => res.json())
}

export default async function PostPage () {
  const posts:Post[] = await fetchPost()
  return (
    <section className='grid grid-cols-[repeat(auto-fill,minmax(19rem,1fr))] gap-14 p-14'>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

    </section>
  )
}
