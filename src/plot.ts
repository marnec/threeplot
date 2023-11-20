import {
  AxesHelper,
  Color,
  GridHelper,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export abstract class Plot {
  protected scene: Scene;
  protected renderer: WebGLRenderer;
  protected camera: PerspectiveCamera;
  protected axes: AxesHelper;
  protected controls: OrbitControls;
  private canvas: HTMLCanvasElement;

  constructor(
    protected width: number,
    protected height: number,
    protected depth: number
  ) {
    this.scene = new Scene();
    this.scene.background = new Color(0xffffff);
  }

  public showOn(canvas: HTMLCanvasElement): this {
    this.canvas = canvas;
    const { clientWidth, clientHeight } = canvas;

    this.renderer = new WebGLRenderer({ canvas });
    this.renderer.setSize(clientWidth, clientHeight);

    this.setCamera(clientWidth, clientHeight);
    this.setControls();
    this.setAxes();
    this.setGrids();
    this.updateOnChanges();

    this.update();

    return this;
  }

  private setCamera(width: number, height: number) {
    this.camera = new PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(this.width * 2, this.height * 2, this.depth * 2);
    this.scene.add(this.camera);
  }

  private setControls() {
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.target.set(0, 0, 0);
  }

  private setAxes() {
    const x = this.width + this.width / 10;
    const y = this.height + this.height / 10;
    const z = this.depth + this.depth / 10;

    this.axes = new AxesHelper(Math.max(x, y, z));
    this.scene.add(this.axes);
  }

  private setGrids() {
    const gridxz = new GridHelper(Math.max(this.width, this.depth));
    gridxz.position.setX(this.width / 2);
    gridxz.position.setZ(this.depth / 2);

    const gridxy = new GridHelper(Math.max(this.width, this.height));
    gridxy.position.setX(this.width / 2);
    gridxy.position.setY(this.height / 2);
    gridxy.rotateOnAxis(new Vector3(1, 0, 0), Math.PI / 2);

    const gridyz = new GridHelper(Math.max(this.height, this.depth));
    gridyz.position.setY(this.height / 2);
    gridyz.position.setZ(this.depth / 2);
    gridyz.rotateOnAxis(new Vector3(0, 0, 1), Math.PI / 2);

    this.scene.add(gridxz);
    this.scene.add(gridxy);
    this.scene.add(gridyz);
  }

  updateOnChanges() {
    this.controls.addEventListener("change", () => this.update());

    const observer = new ResizeObserver(() => this.update());

    observer.observe(this.canvas);
  }

  protected update() {
    this.renderer.render(this.scene, this.camera);
  }

  public capture() {
    const base64 = this.canvas.toDataURL("img/png");
  }
}
