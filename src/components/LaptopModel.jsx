import React, { useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

function LaptopModel() {
  const { scene, nodes, materials } = useGLTF('/models/macbook-pro.glb'); // Path to your laptop model
  const screenTexture = useTexture('/models/spr-design-system-dark-large.png'); // Path to your screen image
  
  // Log to inspect nodes and materials structure
  console.log("Nodes:", nodes);
  console.log("Materials:", materials);

  // Customize colors and textures if materials and nodes are correctly identified
  useEffect(() => {
    if (materials && nodes) {
      // Check for material and node names in the logs and update accordingly
      const laptopBodyMaterial = materials['LaptopBodyMaterial']; // Update if actual name differs
      const laptopScreenNode = nodes['LaptopScreen']; // Update if actual name differs

      if (laptopBodyMaterial) {
        laptopBodyMaterial.color.set('#000000'); // Change color as desired
      }

      if (laptopScreenNode) {
        laptopScreenNode.material.map = screenTexture;
        laptopScreenNode.material.needsUpdate = true;
      }
    }
  }, [materials, nodes, screenTexture]);

  return <primitive object={scene} scale={1} />;
}

export default LaptopModel;
