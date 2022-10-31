import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import EarthDayMap from "./IMG/8k_earth_daymap.jpg";
import EarthNormalMap from "./IMG/8k_earth_normal_map.jpg";
import SunMap from "./IMG/2k_sun.jpg";
import JupiterMap from "./IMG/2k_jupiter.jpg";
import MarsMap from "./IMG/2k_mars.jpg";
import MercuryMap from "./IMG/2k_mercury.jpg";
import NeptuneMap from "./IMG/2k_neptune.jpg";
import SaturneMap from "./IMG/2k_saturn.jpg";
import UranusMap from "./IMG/2k_uranus.jpg";
import VenusMap from "./IMG/2k_venus.jpg";
import MoonMap from "./IMG/2k_moon.jpg";
import BackgroundStars from "./IMG/2k_stars.jpg";
import { TextureLoader } from 'three';

function Home() {

    const [vitesse, setVitesse] = useState(true)

    const [colorMap, normalMap, SunMapLoad, JupiterMapLoad, MarsMapLoad, MercuryMapLoad, NeptuneMapLoad, SaturneMapLoad, UranusMapLoad, VenusMapLoad, MoonMapLoad]
        = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, SunMap, JupiterMap, MarsMap, MercuryMap, NeptuneMap, SaturneMap, UranusMap, VenusMap, MoonMap]);

    const Moon = () => {
        // const refMesh = useRef();
        // useFrame(() => {
        //     if (refMesh.current) {
        //         refMesh.current.rotation.y += 0.01;
        //     }
        // });
        return (<mesh position={[0, 0, 15]}>
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial map={MoonMapLoad} />
        </mesh>);
    }

    const Mercure = () => {
        return (<mesh position={[0, 0, 100]}>
            <sphereGeometry args={[3, 32, 32]} />
            <meshStandardMaterial map={MercuryMapLoad} />
        </mesh>);
    }

    const Venus = () => {
        return (<mesh position={[0, 0, 150]}>
            <sphereGeometry args={[8, 32, 32]} />
            <meshStandardMaterial map={VenusMapLoad} />
        </mesh>);
    }

    const Earth = () => {
        const refMesh = useRef();
        useFrame(() => {
            if (refMesh.current) {
                refMesh.current.rotation.y += 0.01;
            }
        });
        return (<mesh ref={refMesh} position={[0, 0, 200]} >
            <sphereGeometry args={[8, 32, 32]} />
            <meshStandardMaterial map={colorMap} normalMap={normalMap} />
            <Moon />
        </mesh>);
    }

    const Mars = () => {
        return (<mesh position={[0, 0, 250]}>
            <sphereGeometry args={[5, 32, 32]} />
            <meshStandardMaterial map={MarsMapLoad} />
        </mesh>);
    }

    const Jupiter = () => {
        return (<mesh position={[0, 0, 300]}>
            <sphereGeometry args={[19, 32, 32]} />
            <meshStandardMaterial map={JupiterMapLoad} />
        </mesh>);
    }

    const Saturne = () => {
        return (<mesh position={[0, 0, 350]}>
            <sphereGeometry args={[18, 32, 32]} />
            <meshStandardMaterial map={SaturneMapLoad} />
            <mesh
                rotation={[20, 0, 0]}>
                <ringBufferGeometry args={[22, 30, 30]} />
                <meshBasicMaterial color={"orange"} />
            </mesh>
        </mesh>);
    }

    const Uranus = () => {
        return (<mesh position={[0, 0, 400]}>
            <sphereGeometry args={[10, 32, 32]} />
            <meshStandardMaterial map={UranusMapLoad} />
        </mesh>);
    }

    const Neptune = () => {
        return (<mesh position={[0, 0, 450]}>
            <sphereGeometry args={[10, 32, 32]} />
            <meshStandardMaterial map={NeptuneMapLoad} />
        </mesh>);
    }

    const Sun = () => {
        const refEarth = useRef();
        const refMercure = useRef();
        const refVenus = useRef();
        const refMars = useRef();
        const refJupiter = useRef();
        const refSaturne = useRef();
        const refUranus = useRef();
        const refNeptune = useRef();
        useFrame(() => {
            if (vitesse) {
                if (refEarth.current) {
                    refEarth.current.rotation.y += 0.03;
                } if (refMercure.current) {
                    refMercure.current.rotation.y += 0.008;
                } if (refVenus.current) {
                    refVenus.current.rotation.y += 0.02;
                } if (refMars.current) {
                    refMars.current.rotation.y += 0.04;
                } if (refJupiter.current) {
                    refJupiter.current.rotation.y += 0.001;
                } if (refSaturne.current) {
                    refSaturne.current.rotation.y += 0.002;
                } if (refUranus.current) {
                    refUranus.current.rotation.y += 0.008;
                } if (refNeptune.current) {
                    refNeptune.current.rotation.y += 0.01;
                }
            }
            else {
                if (refEarth.current) {
                    refEarth.current.rotation.y = 0;
                } if (refMercure.current) {
                    refMercure.current.rotation.y += 0;
                } if (refVenus.current) {
                    refVenus.current.rotation.y += 0;
                } if (refMars.current) {
                    refMars.current.rotation.y += 0;
                } if (refJupiter.current) {
                    refJupiter.current.rotation.y += 0;
                } if (refSaturne.current) {
                    refSaturne.current.rotation.y += 0;
                } if (refUranus.current) {
                    refUranus.current.rotation.y += 0;
                } if (refNeptune.current) {
                    refNeptune.current.rotation.y += 0;
                }
            }
        });
        return (<mesh position={[20, 0, -200]}>
            <sphereGeometry args={[64, 32, 32]} />
            <OrbitControls enableZoom={true} enableRotate={true} zoomSpeed={2} />
            {/* <meshBasicMaterial color={"orange"} /> */}
            <meshStandardMaterial map={SunMapLoad} />
            <ambientLight intensity={0.3} rotateX={1} />
            <pointLight color={'white'} intensity={5} distance={1000} />
            <mesh ref={refMercure} >
                <Mercure />
            </mesh>

            <mesh ref={refVenus} >
                <Venus />
            </mesh>

            <mesh ref={refEarth} >
                <Earth />
            </mesh>

            <mesh ref={refMars} >
                <Mars />
            </mesh>

            <mesh ref={refJupiter} >
                <Jupiter />
            </mesh>

            <mesh ref={refSaturne} >
                <Saturne />
            </mesh>

            <mesh ref={refUranus} >
                <Uranus />
            </mesh>

            <mesh ref={refNeptune} >
                <Neptune />
            </mesh>
        </mesh>);
    }



    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw', backgroundImage: `url(${BackgroundStars})`, color: 'white', fontSize: "1vw" }}>
            <div onClick={() => vitesse ? setVitesse(false) : setVitesse(true)}>{vitesse ? 'PLAY' : 'PAUSE'}</div>
            <Canvas >
                {/* <> */}
                {/* <ambientLight intensity={1} rotateX={4} /> */}
                <Sun />
                {/* </> */}
            </Canvas>
        </div>
    );
}

export default Home;
