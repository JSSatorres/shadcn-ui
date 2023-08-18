interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

export default async function PostPage () {
  const posts:Post[] = await fetchPost()
  return (
    <section>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}

    </section>
  )
}
