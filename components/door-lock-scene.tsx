"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls, Environment, Center } from "@react-three/drei"
import { Suspense, useRef, useState, useEffect } from "react"
import type * as THREE from "three"

function DoorLockModel() {
  const { scene } = useGLTF("/models/school-doorlock.glb")
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
    }
  })

  return (
    <Center>
      <group ref={groupRef}>
        <primitive object={scene} scale={2} />
      </group>
    </Center>
  )
}

function LoadingSpinner() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#f97316" wireframe />
    </mesh>
  )
}

export function DoorLockScene() {
  const [hasError, setHasError] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-center text-muted-foreground">
          <p>3D preview unavailable</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "default",
          failIfMajorPerformanceCaveat: false
        }}
        style={{ background: "transparent" }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", (e) => {
            e.preventDefault()
            setHasError(true)
          })
        }}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, -5, -5]} intensity={0.3} />
          
          <DoorLockModel />
          
          <Environment preset="city" />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.8}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

useGLTF.preload("/models/school-doorlock.glb")
