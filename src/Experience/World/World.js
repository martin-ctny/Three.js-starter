import * as THREE from "three";
import Experience from "../Experience";
import Environement from "./Environement";
import Floor from "./Floor";

export default class Word {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // Basic Cube
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ color: "red" })
    );
    // this.scene.add(cube);

    // Environement

    this.resources.on("loaded", () => {
      this.floor = new Floor();
      this.environement = new Environement();
    });
  }
}
