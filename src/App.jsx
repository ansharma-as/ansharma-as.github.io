import './App.css'
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects.jsx')); 
const Contact = lazy(() => import('./pages/Contact')); 
const About = lazy(() => import('./pages/About')); 

//const NotFound = lazy(() => import('./NotFound')); // Lazy loading NotFound component


function App() {
  
  return (
    <Router>
      <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
           <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/about" element={<About />} /> 

           {/* <Route path="*" element={<NotFound />} />  */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

