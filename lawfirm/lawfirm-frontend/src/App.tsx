// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout/Layout';
// import Home from './pages/Home';
// import About from './pages/About';
// import PracticeAreas from './pages/PracticeAreas';
// import Contact from './pages/Contact';
// import BlogDetail from './pages/BlogDetail';

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/practice-areas" element={<PracticeAreas />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PracticeAreas from './pages/PracticeAreas';
import BlogDetail from './pages/BlogDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Layout from './components/Layout/Layout';
function App() {
  return (
    <Routes>
      {/* ✅ Redirect unknown or root path to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Auth pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected pages with Layout wrapper */}
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Route>

      {/* Optional: catch-all 404 redirect */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
