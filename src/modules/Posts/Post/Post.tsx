import type { PostInfo } from "../models/post";
type PostProps = {
  post: PostInfo;
};
function Post({ post }: PostProps) {
  return (
    <>
      <article className='group'>
        <a
          className='cursor-pointer'
          href={post.link}
          target='_blank'
          rel='noreferrer'
        >
          <div className='bg-card-secondary p-6 rounded-lg shadow-sm border border-grey-border hover:shadow-md hover:bg-tea-green/50 hover:border-tea-green transition-shadow duration-300'>
            <div className='mb-4'>
              <strong className='group-hover:text-secondary-hover text-xl'>
                {post.title}
              </strong>
            </div>
            <p className='leading-relaxed mb-4'>{post.description}</p>
            <p className='text-sm text-gray-500 mb-4'>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <ul className='flex flex-wrap items-center gap-1.5 mb-4'>
              {post.technologies.map((tech) => (
                <li
                  key={tech}
                  className='bg-muted text-muted-foreground font-medium mr-2 px-2.5 py-0.5 rounded'
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </a>
      </article>
    </>
  );
}

export default Post;
