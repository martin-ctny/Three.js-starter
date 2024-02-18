import * as THREE from "three";
import Experience from "../Experience";
import Environement from "./Environement";

export default class Word {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.ressources = this.experience.ressources;

    // Basic Cube
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ color: "red" })
    );
    this.scene.add(cube);

    // Environement

    this.ressources.on("loaded", () => {
      this.environement = new Environement();
    });
  }
}
