import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // Detect WebGL support
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    // --- Three.js Setup ---
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030303, 0.015);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- Geometries & Materials ---
    // 1. Center Floating Cube (Outer Glassy Frame)
    const outerGeo = new THREE.BoxGeometry(3.5, 3.5, 3.5);
    const outerMat = new THREE.MeshPhysicalMaterial({
      color: 0x3b82f6, // Sleek Cobalt Blue
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.35,
      transmission: 0.6,
      side: THREE.DoubleSide,
      wireframe: false,
    });
    const outerCube = new THREE.Mesh(outerGeo, outerMat);
    scene.add(outerCube);

    // 2. Inner Rotating Core Wireframe
    const innerGeo = new THREE.BoxGeometry(2, 2, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const innerCube = new THREE.Mesh(innerGeo, innerMat);
    outerCube.add(innerCube); // Nested rotation

    // 3. Futuristic Octahedron Core
    const coreGeo = new THREE.OctahedronGeometry(0.7);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x7c3aed, // Purple/Indigo Glow
      roughness: 0.2,
      metalness: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    outerCube.add(coreMesh);

    // 4. Parallax Particles (Drifting stars)
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities: number[] = [];

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Scattered coordinates
      positions[i] = (Math.random() - 0.5) * 35;
      positions[i + 1] = (Math.random() - 0.5) * 35;
      positions[i + 2] = (Math.random() - 0.5) * 20;

      // Random velocities
      velocities.push((Math.random() - 0.5) * 0.015); // x
      velocities.push((Math.random() - 0.5) * 0.015); // y
      velocities.push(Math.random() * 0.01 + 0.005); // z speed
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Glowy round particles material
    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x6366f1, // Sleek Indigo particles
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Cyan drifting stars for layered depth
    const particleCount2 = 150;
    const particleGeo2 = new THREE.BufferGeometry();
    const positions2 = new Float32Array(particleCount2 * 3);

    for (let i = 0; i < particleCount2 * 3; i += 3) {
      positions2[i] = (Math.random() - 0.5) * 45;
      positions2[i + 1] = (Math.random() - 0.5) * 45;
      positions2[i + 2] = (Math.random() - 0.5) * 30;
    }

    particleGeo2.setAttribute("position", new THREE.BufferAttribute(positions2, 3));
    const particleMat2 = new THREE.PointsMaterial({
      size: 0.1,
      color: 0x06b6d4, // Cyan particles
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particles2 = new THREE.Points(particleGeo2, particleMat2);
    scene.add(particles2);

    // --- Environment & Lights ---
    const ambientLight = new THREE.AmbientLight(0x111111);
    scene.add(ambientLight);

    const indigoLight = new THREE.PointLight(0x6366f1, 25, 40);
    indigoLight.position.set(5, 5, 5);
    scene.add(indigoLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 25, 40);
    cyanLight.position.set(-5, -5, 5);
    scene.add(cyanLight);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(100, 100, 0x16161a, 0x0d0d0f);
    gridHelper.position.y = -8;
    scene.add(gridHelper);

    // --- Interactive Mouse Coordinates ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const onMouseMove = (e: MouseEvent) => {
      // Map to normalized coordinates -1 to 1
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    // --- Animation Loop ---
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse tracking interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Parallax effect on camera position
      camera.position.x = mouse.x * 2.5;
      camera.position.y = mouse.y * 2.5;
      camera.lookAt(0, 0, 0);

      // Rotate Outer & Inner Cubes
      outerCube.rotation.x = elapsedTime * 0.25;
      outerCube.rotation.y = elapsedTime * 0.3;

      innerCube.rotation.x = -elapsedTime * 0.5;
      innerCube.rotation.y = -elapsedTime * 0.4;

      coreMesh.rotation.y = elapsedTime * 0.8;
      coreMesh.scale.setScalar(1 + Math.sin(elapsedTime * 2) * 0.08);

      // Rotate drifting particle fields slightly
      particles.rotation.y = elapsedTime * 0.02;
      particles2.rotation.y = -elapsedTime * 0.015;

      // Drifting particles motion
      const positionsArr = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        // Float upwards
        positionsArr[idx + 1] += 0.003;
        if (positionsArr[idx + 1] > 15) {
          positionsArr[idx + 1] = -15; // reset
        }
        // Micro oscillation
        positionsArr[idx] += Math.sin(elapsedTime + i) * 0.002;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Render
      renderer.render(scene, camera);
    };

    animate();

    // --- Responsive Resize ---
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // --- Cleanup on Unmount ---
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      
      // Dispose Geometries and Materials
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      particleGeo2.dispose();
      particleMat2.dispose();
      gridHelper.geometry.dispose();
      if (Array.isArray(gridHelper.material)) {
        gridHelper.material.forEach(m => m.dispose());
      } else {
        gridHelper.material.dispose();
      }
      
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
      {webglSupported ? (
        <canvas ref={canvasRef} className="w-full h-full block" />
      ) : (
        // High-fidelity luxury CSS Aurora Background fallback
        <div className="absolute inset-0 bg-gradient-to-br from-[#030303] via-[#0b0813] to-[#030303] flex items-center justify-center">
          <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-indigo-600/10 blur-[120px] animate-aurora" />
          <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] rounded-full bg-cyan-500/10 blur-[150px] animate-aurora [animation-delay:2s]" />
        </div>
      )}
    </div>
  );
}
