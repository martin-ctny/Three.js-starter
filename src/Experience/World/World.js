import * as THREE from "three";
import Experience from "../Experience";

export default class Word {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    // Basic Cube
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ wireframe: true })
    );
    this.scene.add(cube);
  }
}
