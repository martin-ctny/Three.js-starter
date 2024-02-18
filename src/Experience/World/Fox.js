import * as THREE from "three";
import Experience from "../Experience";

export default class Fox {
  constructor() {
    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.scene = this.experience.scene;
    this.time = this.experience.time;

    // Setup
    this.resource = this.resources.items.foxModel;
    console.log(this.resource);

    this.setModel();
    this.setAnimation();
  }
  setModel() {
    this.model = this.resource.scene;
    this.model.scale.set(0.02, 0.02, 0.02);
    this.scene.add(this.model);

    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }
  setAnimation() {
    this.animation = {};
    this.animation.mixer = new THREE.AnimationMixer(this.model);
    this.animation.action = this.animation.mixer.clipAction(
      this.resource.animations[0]
    );
    this.animation.action.play();
  }
  update() {
    this.animation.mixer.update(this.time.delta * 0.001);
  }
}
