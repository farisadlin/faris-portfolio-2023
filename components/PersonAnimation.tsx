import React, { useRef } from "react";
import { Canvas, useFrame, extend, ReactThreeFiber } from "@react-three/fiber";
import { OrbitControls, shaderMaterial, Text } from "@react-three/drei";
import * as THREE from "three";

// Define the shader material
const ScreenShaderMaterial = shaderMaterial(
  { time: 0 },
  // vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  `
    uniform float time;
    varying vec2 vUv;

    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec2 uv = vUv;
      
      // Sky
      vec3 color = vec3(0.0, 0.5, 1.0);
      
      // Hills
      float hill = smoothstep(0.6, 0.8, uv.y);
      color = mix(vec3(0.2, 0.8, 0.2), color, hill);
      
      // Cloud
      vec2 cloudUv = uv * vec2(1.0, 0.5) + vec2(time * 0.05, 0.0);
      float cloud = smoothstep(0.4, 0.6, noise(cloudUv));
      color = mix(color, vec3(1.0), cloud * 0.5);
      
      // Taskbar
      if (uv.y < 0.1) {
        color = vec3(0.2, 0.4, 0.8);
      }
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

// Extend Three.js with our custom shader material
extend({ ScreenShaderMaterial });

// Add type definitions for the custom shader material
declare global {
  namespace JSX {
    interface IntrinsicElements {
      screenShaderMaterial: ReactThreeFiber.Object3DNode<
        typeof ScreenShaderMaterial,
        typeof ScreenShaderMaterial
      >;
      neonMaterial: any;
    }
  }
}

function Person() {
  const groupRef = useRef<THREE.Group>(null!);
  const leftArmRef = useRef<THREE.Group>(null!);
  const rightArmRef = useRef<THREE.Group>(null!);
  const bodyRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.PI + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
    if (leftArmRef.current && rightArmRef.current) {
      // Animate arms to simulate typing
      leftArmRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 10) * 0.1 - 0.5;
      rightArmRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 10 + Math.PI) * 0.1 - 0.5;
    }
    if (bodyRef.current) {
      // Animate body to bend forward
      bodyRef.current.rotation.x = Math.PI * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0.3]} rotation={[0, Math.PI, 0]}>
      {/* Body */}
      <group ref={bodyRef} position={[0, 0.3, 0]}>
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[0.5, 0.6, 0.3]} />
          <meshStandardMaterial color="#4287f5" />
        </mesh>

        {/* Head */}
        <mesh position={[0, 0.7, 0]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color="#ffd700" />
        </mesh>

        {/* Eyes */}
        <mesh position={[0.07, 0.75, 0.15]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[-0.07, 0.75, 0.15]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>

        {/* Nose */}
        <mesh position={[0, 0.7, 0.18]}>
          <boxGeometry args={[0.04, 0.04, 0.04]} />
          <meshStandardMaterial color="#f4a460" />
        </mesh>

        {/* Mouth */}
        <mesh position={[0, 0.63, 0.18]} rotation={[0.2, 0, 0]}>
          <boxGeometry args={[0.08, 0.02, 0.01]} />
          <meshStandardMaterial color="#8b4513" />
        </mesh>

        {/* Hat */}
        <mesh position={[0, 0.9, 0]}>
          <cylinderGeometry args={[0.22, 0.22, 0.1, 32]} />
          <meshStandardMaterial color="#333333" />
        </mesh>

        {/* Arms */}
        <group position={[0.25, 0.3, 0]} ref={rightArmRef}>
          <mesh
            position={[0, -0.2, 0.2]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
          >
            <boxGeometry args={[0.1, 0.4, 0.1]} />
            <meshStandardMaterial color="#ffd700" />
          </mesh>
        </group>
        <group position={[-0.25, 0.3, 0]} ref={leftArmRef}>
          <mesh
            position={[0, -0.2, 0.2]}
            rotation={[-Math.PI / 2, 0, Math.PI / 6]}
          >
            <boxGeometry args={[0.1, 0.4, 0.1]} />
            <meshStandardMaterial color="#ffd700" />
          </mesh>
        </group>
      </group>

      {/* Legs */}
      <group position={[0.15, -0.15, 0.4]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh position={[0.15, 0.05, 0.15]} rotation={[-Math.PI / 2, 0, 0]}>
          <boxGeometry args={[0.1, 0.4, 0.1]} />
          <meshStandardMaterial color="#4287f5" />
        </mesh>
        <mesh position={[-0.15, 0.05, 0.15]} rotation={[-Math.PI / 2, 0, 0]}>
          <boxGeometry args={[0.1, 0.4, 0.1]} />
          <meshStandardMaterial color="#4287f5" />
        </mesh>
      </group>

      {/* Chair */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.6, 0.1, 0.5]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[0, 0.5, -0.2]}>
        <boxGeometry args={[0.6, 0.5, 0.1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Chair Legs */}
      <mesh position={[0.25, -0.05, -0.2]}>
        <boxGeometry args={[0.05, 0.4, 0.05]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[-0.25, -0.05, -0.2]}>
        <boxGeometry args={[0.05, 0.4, 0.05]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[0.25, -0.05, 0.2]}>
        <boxGeometry args={[0.05, 0.4, 0.05]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[-0.25, -0.05, 0.2]}>
        <boxGeometry args={[0.05, 0.4, 0.05]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
    </group>
  );
}

function Computer() {
  const screenRef = useRef<any>(null!);
  const screenLightRef = useRef<THREE.PointLight>(null!);

  useFrame((state) => {
    if (screenRef.current) {
      screenRef.current.uniforms["time"].value = state.clock.elapsedTime;
    }
    if (screenLightRef.current) {
      // Simulate screen light flickering
      screenLightRef.current.intensity =
        0.8 + Math.sin(state.clock.elapsedTime * 10) * 0.1;
    }
  });

  return (
    <group position={[0, 0.1, -0.4]}>
      <group position={[0, -0.2, 0]}>
        {/* Monitor Stand Base */}
        <mesh position={[0, 0.15, -0.3]}>
          <boxGeometry args={[0.3, 0.05, 0.2]} />
          <meshStandardMaterial color="#555555" />
        </mesh>

        {/* Monitor Stand Legs */}
        <mesh position={[-0.1, 0.25, -0.3]}>
          <boxGeometry args={[0.02, 0.2, 0.02]} />
          <meshStandardMaterial color="#555555" />
        </mesh>
        <mesh position={[0.1, 0.25, -0.3]}>
          <boxGeometry args={[0.02, 0.2, 0.02]} />
          <meshStandardMaterial color="#555555" />
        </mesh>

        {/* Monitor Stand Top */}
        <mesh position={[0, 0.35, -0.3]}>
          <boxGeometry args={[0.25, 0.02, 0.15]} />
          <meshStandardMaterial color="#555555" />
        </mesh>
      </group>
      <group position={[0, -0.5, 0.05]} scale={[1.2, 1.2, 1.2]}>
        {/* Monitor */}
        <mesh position={[0, 0.8, -0.3]}>
          <boxGeometry args={[0.7, 0.5, 0.05]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
        {/* Screen */}
        <mesh position={[0, 0.8, -0.27]}>
          <planeGeometry args={[0.65, 0.45]} />
          <screenShaderMaterial ref={screenRef} />
        </mesh>
      </group>

      <group position={[0, 0, 0.1]}>
        {/* Keyboard */}
        <mesh position={[0, -0.05, 0.05]}>
          <boxGeometry args={[0.4, 0.05, 0.2]} />
          <meshStandardMaterial color="#555555" />
        </mesh>

        {/* Mouse */}
        <group position={[0.3, -0.05, 0.05]}>
          <mesh>
            <boxGeometry args={[0.08, 0.03, 0.12]} />
            <meshStandardMaterial color="#333333" />
          </mesh>
          <mesh position={[0, 0.02, -0.04]}>
            <boxGeometry args={[0.08, 0.01, 0.04]} />
            <meshStandardMaterial color="#444444" />
          </mesh>
        </group>
      </group>

      {/* Table */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[1.2, 0.05, 0.8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Table Legs */}
      <mesh position={[0.55, -0.35, 0.35]}>
        <boxGeometry args={[0.05, 0.5, 0.05]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[-0.55, -0.35, 0.35]}>
        <boxGeometry args={[0.05, 0.5, 0.05]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[0.55, -0.35, -0.35]}>
        <boxGeometry args={[0.05, 0.5, 0.05]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[-0.55, -0.35, -0.35]}>
        <boxGeometry args={[0.05, 0.5, 0.05]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Screen light */}
      <pointLight
        ref={screenLightRef}
        position={[0, 0.8, 0]}
        intensity={0.8}
        distance={2}
        color="#ffffff"
      />
    </group>
  );
}

// Add this new shader material for the glow effect
const NeonMaterial = shaderMaterial(
  { color: new THREE.Color(0.0, 1.0, 1.0) },
  // vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  `
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      float intensity = 0.7 - distance(vUv, vec2(0.5));
      gl_FragColor = vec4(color * intensity, intensity);
    }
  `
);

extend({ NeonMaterial });

function NeonText() {
  const textRef = React.useRef<Text & { material: THREE.MeshBasicMaterial }>(
    null
  );

  useFrame((state) => {
    if (textRef.current && textRef.current.material) {
      textRef.current.material.color.setHSL(
        0.5,
        1,
        0.5 + Math.sin(state.clock.elapsedTime) * 0.2
      );
    }
  });

  return (
    <group>
      <Text
        ref={textRef}
        position={[0, 1.2, -1]}
        fontSize={0.15}
        color="#D926AA"
        anchorX="center"
        anchorY="middle"
      >
        Rotate With Mouse
      </Text>
      <mesh position={[0, 1.2, -1.01]}>
        <planeGeometry args={[1.5, 0.3]} />{" "}
        {/* Increased width from 1.2 to 1.5 */}
        <neonMaterial color={new THREE.Color(0.85, 0.15, 0.67)} />
      </mesh>
      <pointLight
        position={[0, 1.2, -0.9]}
        intensity={0.5}
        distance={1}
        color="#D926AA"
      />
    </group>
  );
}

const PersonAnimation = () => {
  return (
    <Canvas camera={{ position: [-2, 0.5, 2.5], fov: 60 }}>
      <ambientLight intensity={0.2} />
      <Person />
      <Computer />
      <NeonText />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default PersonAnimation;
