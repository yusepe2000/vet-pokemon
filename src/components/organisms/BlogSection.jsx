import posts from '../../data/Blog';
import BlogCard from '../molecules/BlogCard';
import '../../styles/organismsStyle/Blogsection.css';
import Text from '../atoms/Text';
 
function BlogSection() {
  return (
    <section id="Blog" className="seccion-blog">
      <Text variant='h2'>Noticias desde el Centro Pokémon</Text>
      <div className="blog-grid">
        {posts.map((post) => (

          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
 
export default BlogSection;