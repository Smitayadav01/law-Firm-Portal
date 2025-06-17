import React, { useState } from 'react';

type BlogPost = {
  id: number;
  title: string;
  summary: string;
  fullContent: string;
  date: string;
  author?: string;
};

export const blogData: BlogPost[] = [
  {
    id: 1,
    title: "Basics of Criminal Law in India",
    summary: "Explore the foundation of criminal law, from FIRs to trials and bail procedures.",
    fullContent:
      "Criminal law in India governs crimes like theft, assault, and fraud. This blog outlines the lifecycle of a criminal case — from filing an FIR, police investigation, charge sheet, and trial — and explains key provisions under the Indian Penal Code (IPC) and Criminal Procedure Code (CrPC).",
    date: "2025-06-17",
    author: "Adv. R. Bhatia",
  },
  {
    id: 2,
    title: "Understanding Family Law: Marriage, Divorce & Custody",
    summary:
      "A guide to the legal framework governing personal relationships in India.",
    fullContent:
      "Family law in India deals with marriage, divorce, child custody, and inheritance. This article explores the Hindu Marriage Act, Special Marriage Act, and relevant sections on domestic violence, maintenance, and guardianship. Know your rights and remedies.",
    date: "2025-06-14",
    author: "Adv. A. Sinha",
  },
  {
    id: 3,
    title: "Understanding Civil Law in India",
    summary:
      "An overview of civil law procedures and how clients can navigate legal cases effectively.",
    fullContent:
      "Civil law covers disputes between individuals or organizations over rights and obligations. Learn how to file a civil suit, steps in civil litigation, and remedies like injunctions, compensation, and specific performance.",
    date: "2024-12-01",
    author: "Adv. Seema Vishwakarma",
  },
  {
    id: 4,
    title: "How to Choose the Right Lawyer for Your Case",
    summary:
      "Key tips and factors to keep in mind while selecting legal counsel.",
    fullContent:
      "Whether it's a civil case, criminal defense, or a property dispute, finding the right lawyer is crucial. This blog guides you through evaluating a lawyer’s specialization, client reviews, consultation approach, and fee structure.",
    date: "2025-06-10",
    author: "Adv. K. Sharma",
  },
  {
    id: 5,
    title: "Recent Changes in Property Law",
    summary:
      "Latest legal updates impacting buyers, sellers, and real estate investors.",
    fullContent:
      "The 2025 property law amendment introduces digital property verification, new buyer protections, and updated stamp duty rules. Learn how these changes affect transactions, disputes, and property registration.",
    date: "2025-06-05",
    author: "Adv. S. Patel",
  },
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
              {blogData.map(post => (
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
