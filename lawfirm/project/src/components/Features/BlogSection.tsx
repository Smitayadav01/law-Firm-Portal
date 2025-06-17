import React, { useState } from 'react';

type BlogPost = {
  id: number;
  title: string;
  summary: string;
  fullContent: string;
  date: string;
  author?: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Corporate Law in India",
    summary: "An introduction to corporate law principles applicable to Indian businesses...",
    fullContent: "This article dives deep into the nuances of corporate law in India, including the role of SEBI, ROC compliance, board structures, and the Companies Act 2013...",
    date: "June 15, 2025",
    author: "Adv. R. Mehta"
  },
  {
    id: 2,
    title: "How to Choose the Right Lawyer for Your Case",
    summary: "Key tips and factors to keep in mind while selecting your legal representation.",
    fullContent: "Choosing a lawyer involves assessing their specialization, experience, track record, and compatibility. This guide breaks it down step-by-step to help you make the right choice...",
    date: "June 10, 2025",
    author: "Adv. K. Sharma"
  },
  {
    id: 3,
    title: "Recent Changes in Property Law",
    summary: "Latest updates on amendments to property laws impacting buyers and sellers.",
    fullContent: "The 2025 property law amendment redefines registration norms, stamp duty rebates, and introduces new safeguards for homebuyers. Here’s everything you need to know...",
    date: "June 5, 2025",
    author: "Adv. S. Patel"
  }
];

const BlogSection: React.FC = () => {
  const [expandedBlogId, setExpandedBlogId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedBlogId(prev => (prev === id ? null : id));
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.headingWrapper}>
          <h2 style={styles.heading}>Latest Blog Posts</h2>
          <div style={styles.underline}></div>
        </div>
        <div style={styles.postsContainer}>
          {blogPosts.map(post => (
            <div key={post.id} style={styles.postCard}>
              <h3 style={styles.postTitle}>{post.title}</h3>
              <p style={styles.summary}>{post.summary}</p>
              <small style={styles.meta}>{post.author} | {post.date}</small>

              {expandedBlogId === post.id && (
                <p style={styles.fullContent}>{post.fullContent}</p>
              )}

              <button onClick={() => toggleExpand(post.id)} style={styles.readMore}>
                {expandedBlogId === post.id ? 'Read Less' : 'Read More →'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: '60px 0',
    backgroundColor: '#f9f9f9',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  headingWrapper: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#212529',
    marginBottom: '10px',
  },
  underline: {
    width: '80px',
    height: '4px',
    backgroundColor: '#ffc107',
    margin: '0 auto',
    borderRadius: '2px',
  },
  postsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  postCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
  },
  postTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    marginBottom: '15px',
  },
  summary: {
    fontSize: '0.95rem',
    color: '#555',
    marginBottom: '10px',
  },
  meta: {
    fontSize: '0.85rem',
    color: '#888',
    marginBottom: '10px',
  },
  fullContent: {
    fontSize: '0.95rem',
    color: '#333',
    marginBottom: '10px',
    marginTop: '5px',
  },
  readMore: {
    background: 'none',
    border: 'none',
    color: '#212529',
    fontWeight: 500,
    cursor: 'pointer',
    textAlign: 'left',
    padding: 0,
    borderBottom: '2px solid #ffc107',
    width: 'fit-content',
  },
};

export default BlogSection;
