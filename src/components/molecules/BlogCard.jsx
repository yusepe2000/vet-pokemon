import Image from '../atoms/Image';
import Text from '../atoms/Text';
 
function BlogCard({ post }) {

  return (
    <article className="blog-card">

      <Image src={post.image} alt={post.alt} className="blog-img" />

      <div className="blog-info">
        <Text variant="p" className="blog-titulo">{post.titulo}</Text>
        <Text variant="p" className="blog-meta">{post.fecha} | {post.categoria}</Text>
        
        <Text variant="p" className="blog-texto">{post.texto}</Text>
        
      </div>
    </article>
  );
}
 
export default BlogCard;