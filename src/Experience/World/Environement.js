import * as THREE from "three";
import Experience from "../Experience";

export default class Environement {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.world = this.experience.world;

    this.setSunLight();
  }
  setSunLight() {
    this.sunLight = new THREE.DirectionalLight("#ffffff", 4);
    this.sunLight.position.set(1, 2, 2);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.camera.far = 10;
    this.sunLight.shadow.normalBias = 0.05;
    this.scene.add(this.sunLight);
  }
}
