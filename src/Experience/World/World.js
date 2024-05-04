import * as THREE from "three";
import Experience from "../Experience";
import Environement from "./Environement";
import Floor from "./Floor";
import Fox from "./Fox";
import Cube from "./Cube/Cube";

export default class Word {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // Basic Cube
    this.cube = new Cube(new THREE.Vector3(2, 0.5, 0));

    // Environement

    this.resources.on("loaded", () => {
      this.floor = new Floor();
      this.fox = new Fox();
      this.environement = new Environement();
    });
  }
  update() {
    if (this.fox) {
      this.fox.update();
    }
  }
}
