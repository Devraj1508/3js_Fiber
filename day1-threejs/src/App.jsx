import { useEffect } from "react"
import * as Three from "three"


function App() {
  useEffect(()=>{

    //create a scene
    const scene=new Three.Scene();

    //create a camera
    const camera= new Three.PerspectiveCamera(
      75,
      window.innerWidth/window.innerHeight,
      0.1,
      1000
    );
    camera.position.z=7;
    //create a geometry
    const geometry=new Three.BoxGeometry(3,3,3);

    //create material
    const material=new Three.MeshBasicMaterial({
      color: "green"
    });
    const cube=new Three.Mesh(geometry,material);

    scene.add(cube);

    cube.rotation.x=0.5;
    cube.rotation.y=0.5;
    cube.rotation.z=0.5;

    // cube.position.set(0.5,0.5,0.5)


    cube.scale.set(1,1,1);

    //create Render
    const renderer=new Three.WebGLRenderer();

    renderer.setSize(window.innerWidth,window.innerHeight);

     document.body.appendChild(renderer.domElement);


    //Render scene
    // Animation loop

let animationId;
function animate() {
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;

    renderer.render(scene,camera);

    animationId=requestAnimationFrame(animate);
}

animate();

     return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      renderer.domElement.remove();
    };

  }, []);

  return null;
}

export default App
