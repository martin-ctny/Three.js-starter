import * as THREE from "three";
import Experience from "../Experience";

export default class Environement {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.debug = this.experience.debug;

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("Environement");
      this.lightFolder = this.debugFolder.addFolder("Light");
      this.debugFolder.close();
      this.lightFolder.close();
    }

    this.setSunLight();
    this.setEnvironmentMap();
  }
  setSunLight() {
    this.sunLight = new THREE.DirectionalLight("#ffffff", 4);
    this.sunLight.position.set(1, 2, 2);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.camera.far = 10;
    this.sunLight.shadow.normalBias = 0.05;
    this.scene.add(this.sunLight);

    // Debug
    if (this.debug.active) {
      this.lightFolder
        .add(this.sunLight, "intensity")
        .min(0)
        .max(10)
        .step(0.001)
        .name("lightIntensity");
      this.lightFolder
        .add(this.sunLight.position, "x")
        .min(-5)
        .max(5)
        .step(0.001)
        .name("lightX");
      this.lightFolder
        .add(this.sunLight.position, "y")
        .min(-5)
        .max(5)
        .step(0.001)
        .name("lightY");
      this.lightFolder
        .add(this.sunLight.position, "z")
        .min(-5)
        .max(5)
        .step(0.001)
        .name("lightZ");
    }
  }
  setEnvironmentMap() {
    this.environmentMap = {};
    this.environmentMap.intensity = 0.4;
    this.environmentMap.texture = this.resources.items.environmentMapTexture;
    this.environmentMap.texture.colorSpace = THREE.SRGBColorSpace;
    this.scene.environment = this.environmentMap.texture;

    this.environmentMap.updateMaterials = () => {
      this.scene.traverse((child) => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshStandardMaterial
        ) {
          child.material.envMap = this.environmentMap.texture;
          child.material.envMapIntensity = this.environmentMap.intensity;
          child.material.needsUpdate = true;
        }
      });
    };
    this.environmentMap.updateMaterials();

    // Debug

    if (this.debug.active) {
      this.debugFolder
        .add(this.environmentMap, "intensity")
        .min(0)
        .max(5)
        .step(0.001)
        .name("intensity")
        .onChange(this.environmentMap.updateMaterials);
    }
  }
}
