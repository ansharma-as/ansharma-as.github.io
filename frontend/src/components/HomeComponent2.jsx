// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// function LaptopModel() {
//   // Load the 3D model using useGLTF
//   const { scene } = useGLTF('/public/models/macbook-pro.glb'); // Path to your laptop model

//   return <primitive object={scene} scale={1} />;
// }

// function HomeComponent2() {
//   const [animateLogo, setAnimateLogo] = useState(false);

//   useEffect(() => {
//     setAnimateLogo(true);
//   }, []);

//   return (
//     <div className="flex h-screen bg-transparent     p-20 italic">
//       {/* Left side: HomeAnimation1 */}
//       <div className="w-1/3 flex justify-center items-center mb-28">
//   <div className="space-y-6 text-white p-8 max-w-md">
//   <h1 className="text-5xl font-bold text-white flex items-center space-x-2">
//   Hi there!
//   <img src="/public/hands/Waving Hand Medium-Light Skin Tone.png" alt="wave icon" className="w-14 p-2 h-14 inline-block" />
// </h1>    <p className="text-lg leading-relaxed">
// I am Ansh Sharma from Noida, India.
// I am a AIML and Full-Stack Developer. Currently Lerning GenAI
// I am pursuing B.Tech in Computer Science from Bennett University.

//     </p>
//     <p className="text-lg leading-relaxed">
//       In my spare time I like to practice coding, play video games, and{' '}
//       <a href="#" className="text-blue-400 underline">explore new tech</a>.
//       I’m always down for hearing about new projects, so feel free to drop me a line.
//     </p>
//     <a href="/contact" className="text-blue-400 flex items-center space-x-2 hover:underline">
//       <span>➤</span>
//       <span>Send me a message</span>
//     </a>
//   </div>
// </div>

//       {/* Right side: 3D Canvas with Laptop */}
//       <div className="w-2/3 relative flex justify-center items-center">
//         <div className={`${animateLogo ? 'animate-slideUp' : ''}`}>
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 1 }}
//             className="w-full h-full"
//           >
//             <Canvas>
//               <ambientLight intensity={0.5} />
//               <directionalLight position={[10, 10, 5]} intensity={1} />
//               <OrbitControls enableZoom={false} />
//               <LaptopModel />
//             </Canvas>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomeComponent2;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import LaptopModel from "./LaptopModel";
import videoGif from "/models/vedio3D.gif";
import Details from "./Details";

function HomeComponent2() {
  const [animateLogo, setAnimateLogo] = useState(false);

  useEffect(() => {
    setAnimateLogo(true);
  }, []);

  return (
    <>
      <div className="w-full h-full justify-center items-center bg-transparent">
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-full h-[800px]"
          >
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls enableZoom={false} />
              <LaptopModel />
            </Canvas>
          </motion.div>
        </div>
      </div>
      <>
      <Details/>
      </>
      
    </>
  );
}

export default HomeComponent2;
