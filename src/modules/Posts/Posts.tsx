import type { PostInfo } from "./models/post";
import Post from "./Post/Post";

function Posts() {
  const posts: PostInfo[] = [
    {
      id: 1,
      title: "Project #1",
      description: "Displays a list of items blah blah blah",
      technologies: ["TypeScript", "React", "Vite", "TailwindCSS"],
      link: "#",
    },
    {
      id: 2,
      title: "Project #2",
      description: "Another project description goes here",
      technologies: ["JavaScript", "Vue", "Webpack", "CSS"],
      link: "#",
    },
  ];
  return (
    <>
      <section className='mt-4 text-primary-text'>
        <div className='mb-6'>
          <h2 className='font-bold text-3xl'>Fun reads</h2>
        </div>
        <div className='flex flex-col space-y-8'>
          {posts.map((post) => (
            <div key={post.id}>
              <Post post={post} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Posts;
