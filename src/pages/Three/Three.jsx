import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Model from '../../components/3DModel/Model'

export default function Three() {
  return (
    <Canvas
      shadows
      camera={{ position: [5, 5, 5], fov: 45 }}
    >
      <ambientLight intensity={0.3} />

      <directionalLight
        castShadow
        position={[5, 10, 5]}
        intensity={1.2}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}>
    
        </directionalLight>


      <pointLight position={[-5, 3, -5]} intensity={0.6} />

      <Model scale={1} />

      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
      >
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.3} />
      </mesh>

      <OrbitControls />
    </Canvas>
  )
}
