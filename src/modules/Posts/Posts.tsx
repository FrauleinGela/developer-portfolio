import Post from './Post/Post';
import { useFetchArticles as useFetchArticles } from './hooks/useFetchArticles';

function Posts() {
  const { data: posts = [], error, showLoading } = useFetchArticles();

  return (
    <>
      <section className='text-primary-text'>
        <div className='mb-6'>
          <h2 className='font-bold text-3xl'>Fun reads</h2>
        </div>
        <div className="py-4">
        {error ? (
          <div className='text-red-500'>Error loading posts: {error.message}</div>
        ) : showLoading ? (
          <div className='flex items-center justify-center py-12'>
            <div className='animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-tea-green'></div>
          </div>
        ) : (
          <div className='flex flex-col space-y-8'>
            {posts.map((post) => (
              <div key={post.id}>
                <Post post={post} />
              </div>
            ))}
          </div>
        )}
        </div>
      </section>
    </>
  );
}

export default Posts;
