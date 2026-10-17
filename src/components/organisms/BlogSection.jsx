import posts from '../../data/Blog';
import BlogCard from '../molecules/BlogCard';
 
function BlogSection() {
  return (
    <section id="Blog" className="seccion-blog">
      <h2>Noticias desde el Centro Pokémon</h2>
      <div className="blog-grid">
        {posts.map((post) => (
          
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
 
export default BlogSection;