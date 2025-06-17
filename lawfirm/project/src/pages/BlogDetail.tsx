import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../components/Features/BlogSection';

const BlogDetail: React.FC = () => {
 const { id } = useParams<{ id: string }>();
const blog = blogData.find(b => b.id === parseInt(id ?? '', 10));

  if (!blog) {
    return <div style={styles.container}><h2>Blog not found</h2></div>;
  }

  return (
    <div style={styles.container}>
      <h1>{blog.title}</h1>
      <p><small>{blog.author} | {blog.date}</small></p>
      <div style={styles.content}>
        <p>{blog.summary}</p>
        <p>👉 This is where you can write the full blog content for "{blog.title}".</p>
        <p>You can later fetch this data from a backend or CMS.</p>
      </div>
      <Link to="/" style={styles.backLink}>← Back to Home</Link>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
  },
  content: {
    marginTop: '30px',
    fontSize: '1.1rem',
    lineHeight: '1.6',
  },
  backLink: {
    marginTop: '40px',
    display: 'inline-block',
    color: '#212529',
    textDecoration: 'none',
    borderBottom: '2px solid #ffc107',
    paddingBottom: '3px',
  }
};

export default BlogDetail;
