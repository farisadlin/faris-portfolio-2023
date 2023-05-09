import React, { type ReactNode, useRef, useState } from 'react'

import { Canvas, useFrame } from '@react-three/fiber'
import { RenderTexture, OrbitControls, PerspectiveCamera, Text, ContactShadows, type OrbitControlsProps } from '@react-three/drei'

function Cube (): any {
  const textRef = useRef<any>(null)
  const meshRef = useRef<any>(null)
  useFrame((state) => {
    textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    meshRef.current.rotation.y += 0.01
  })
  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture sourceFile={''} attach="map" anisotropy={16}>
          <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0.5, 5]} />
          <color attach="background" args={['#D926AA']} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <Text ref={textRef} fontSize={4} color="white">
            FA
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  )
}

function Dodecahedron (props) {
  const meshRef = useRef<any>();
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame(() => (meshRef.current.rotation.x += 0.01))
  return (
    <group {...props}>
      <mesh
        ref={meshRef}
        scale={clicked ? 1.5 : 1}
        onClick={() => { click(!clicked) }}
        onPointerOver={() => { hover(true) }}
        onPointerOut={() => { hover(false) }}>
        <dodecahedronGeometry args={[0.75]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : '#D926AA'} />
      </mesh>
    </group>
  )
}

const CubeAnimation = () => {
  return (
    <Canvas camera={{ position: [1, 1, 1], fov: 100 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Cube />
      <Dodecahedron position={[0, 1, 0]} scale={0.2} />
      <ContactShadows frames={1} position={[0, -0.5, 0]} blur={1} opacity={0.75} />
      <ContactShadows frames={1} position={[0, -0.5, 0]} blur={3} color="#D926AA" />
      <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
    </Canvas>
  )
}

export default CubeAnimation
