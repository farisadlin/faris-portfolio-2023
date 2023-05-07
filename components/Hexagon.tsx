import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RenderTexture, Text } from '@react-three/drei';
import { Mesh } from 'three';

const Hexagon = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const meshRef = useRef<Mesh>();
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => {
    meshRef.current.rotation.x += 0.012;
    meshRef.current.rotation.y += 0.012;
  })
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      >
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={'#D926AA'}>
        <RenderTexture sourceFile={''} attach="map">
          <Text color={'white'} fontSize={3}>FA</Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  )
};

export default Hexagon;