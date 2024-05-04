import Experience from "../../Experience.js";
import vertexShader from "./vertexShader.glsl";
import fragmentShader from "./fragmentShader.glsl";
import { BoxGeometry, Mesh, ShaderMaterial, Vector3 } from "three";

export default class Cube {
  constructor(position = new Vector3(0, 0, 0)) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.debug = this.experience.debug;
    this.position = position;

    this.setGeometry();
    this.setMaterial();
    this.setMesh();
  }

  setGeometry() {
    this.geometry = new BoxGeometry(1, 1, 1);
  }
  setMaterial() {
    this.material = new ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
  }

  setMesh() {
    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.position.copy(this.position);
    this.scene.add(this.mesh);

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("Cube");
      this.debugFolder.close();
      this.debugFolder
        .add(this.mesh.position, "x")
        .name("positionX")
        .step(0.001);
      this.debugFolder
        .add(this.mesh.position, "y")
        .name("positionY")
        .step(0.001);
      this.debugFolder
        .add(this.mesh.position, "z")
        .name("positionZ")
        .step(0.001);
    }
  }
}
