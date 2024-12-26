import React from "react";
import {Canvas} from "@react-three/fiber";
import "./style.css";
import { Cylinder, OrbitControls} from '@react-three/drei';
import  * as THREE from "three";
import Cyl from "./Cyl";
import {Bloom, EffectComposer, ToneMapping} from "@react-three/postprocessing";

const App = () => {
  return(
    <>
   <Canvas flat camera={{fov:35}}>
    <OrbitControls />
    <ambientLight/>
    <Cyl />
    <EffectComposer>
< Bloom
mipmapBlur
    intensity={6} // The bloom intensity.
    luminanceThreshold={0} 
    luminanceSmoothing={0} 
  />
  </EffectComposer>
    
   </Canvas>
  
  

  
   <div className="w-full bg-black py-32">
    <h1 className="text-white">Hows this !!</h1>
     </div>
  </> 
   );
  
};

export default App;

// npm run dev