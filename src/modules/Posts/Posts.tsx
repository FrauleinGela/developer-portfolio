import type { PostInfo } from "./models/post";
import Post from "./Post/Post";

function Posts() {
  const posts: PostInfo[] = [
    {
      id: 1,
      title: "Eslint rules for dealing with Enums peculiarities",
      description: "As of now Enum have their peculiarities in Typescript...",
      technologies: ["TypeScript", "EsLint"],
      link: "https://dev.to/angelapy/eslint-rules-for-dealing-with-enums-peculiarities-3p4h",
    },
    {
      id: 2,
      title: "Object literals with satisfies operator for UI field mapping",
      description: "Our Frontend is responsible for converting fields into labels that make more sense to users...",
      technologies: ["Typescript"],
      link: "https://dev.to/angelapy/object-literals-with-satisfies-operator-for-ui-field-mapping-2ggp",
    },
  ];
  return (
    <>
      <section className='text-primary-text'>
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
