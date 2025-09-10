import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { scene } = useGLTF('/models/UNIVAC.glb')

  scene.traverse(obj => {
    if (obj.isMesh) {
      obj.castShadow = true
      obj.receiveShadow = true
    }
  })

  return <primitive object={scene} {...props} />
}

useGLTF.preload('/models/UNIVAC.glb')
