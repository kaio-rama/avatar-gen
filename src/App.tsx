import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

function App() {

  return (
    
    <>
      <Canvas camera={{position: [3,3,3]}}>
      <OrbitControls /> 
      <color attach="background" args={["#333"]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshNormalMaterial />
        </mesh>  
      </Canvas>
    </>
  )
}

export default App
