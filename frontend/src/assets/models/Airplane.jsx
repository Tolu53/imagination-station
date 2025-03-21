/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: vervoortward (https://sketchfab.com/vervoortward)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dae-stylized-plane-comet-88-0bbb9ca9a92c451f920c3ca6ee4806cb
Title: DAE Stylized Plane: comet 88
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Airplane(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Airplane/scene-transformed.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // Check if any animations exist and log the available action names.
    if (actions && Object.keys(actions).length > 0) {
      //console.log('Available animation actions:', Object.keys(actions))
      
      // Option 1: If you know the specific animation name (e.g., "Take_001"),
      // you can call it directly:
      // actions.Take_001?.reset().play()

      // Option 2: Otherwise, play the first available animation.
      const firstActionName = Object.keys(actions)[0]
      actions[firstActionName]?.reset().play()
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="e5bd376021cc4d0db8c4771a7e886884fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.backplane1} skeleton={nodes.Object_6.skeleton} />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.final_plane_tex} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.backplane1} skeleton={nodes.Object_9.skeleton} />
                  <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.final_plane_tex} skeleton={nodes.Object_11.skeleton} />
                  <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.backplane1} skeleton={nodes.Object_13.skeleton} />
                  <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.final_plane_tex} skeleton={nodes.Object_15.skeleton} />
                  <skinnedMesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.final_plane_tex} skeleton={nodes.Object_17.skeleton} />
                  <skinnedMesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.backplane1} skeleton={nodes.Object_19.skeleton} />
                  <skinnedMesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials.final_plane_tex} skeleton={nodes.Object_21.skeleton} />
                  <skinnedMesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials.backplane1} skeleton={nodes.Object_23.skeleton} />
                  <skinnedMesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.final_plane_tex} skeleton={nodes.Object_25.skeleton} />
                  <skinnedMesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials.backplane1} skeleton={nodes.Object_27.skeleton} />
                  <skinnedMesh name="Object_29" geometry={nodes.Object_29.geometry} material={materials.backplane1} skeleton={nodes.Object_29.skeleton} />
                  <skinnedMesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials.final_plane_tex} skeleton={nodes.Object_31.skeleton} />
                  <skinnedMesh name="Object_33" geometry={nodes.Object_33.geometry} material={materials.backplane1} skeleton={nodes.Object_33.skeleton} />
                  <skinnedMesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials.final_plane_tex} skeleton={nodes.Object_35.skeleton} />
                  <skinnedMesh name="Object_37" geometry={nodes.Object_37.geometry} material={materials.backplane1} skeleton={nodes.Object_37.skeleton} />
                  <skinnedMesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials.final_plane_tex} skeleton={nodes.Object_39.skeleton} />
                  <skinnedMesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials.backplane1} skeleton={nodes.Object_40.skeleton} />
                  <skinnedMesh name="Object_41" geometry={nodes.Object_41.geometry} material={materials.final_plane_tex} skeleton={nodes.Object_41.skeleton} />
                  <skinnedMesh name="Object_43" geometry={nodes.Object_43.geometry} material={materials.backplane1} skeleton={nodes.Object_43.skeleton} />
                  <skinnedMesh name="Object_45" geometry={nodes.Object_45.geometry} material={materials.final_plane_tex} skeleton={nodes.Object_45.skeleton} />
                  <skinnedMesh name="Object_46" geometry={nodes.Object_46.geometry} material={materials.backplane1} skeleton={nodes.Object_46.skeleton} />
                  <skinnedMesh name="Object_47" geometry={nodes.Object_47.geometry} material={materials.final_plane_tex} skeleton={nodes.Object_47.skeleton} />
                  <skinnedMesh name="Object_49" geometry={nodes.Object_49.geometry} material={materials.light1} skeleton={nodes.Object_49.skeleton} />
                  <skinnedMesh name="Object_51" geometry={nodes.Object_51.geometry} material={materials.lambert1} skeleton={nodes.Object_51.skeleton} />
                  <skinnedMesh name="Object_53" geometry={nodes.Object_53.geometry} material={materials.lambert1} skeleton={nodes.Object_53.skeleton} />
                  <skinnedMesh name="Object_55" geometry={nodes.Object_55.geometry} material={materials.lambert1} skeleton={nodes.Object_55.skeleton} />
                  <skinnedMesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials.lambert1} skeleton={nodes.Object_57.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/Airplane/scene-transformed.glb')
