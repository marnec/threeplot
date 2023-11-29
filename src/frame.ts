import { Color, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Axes } from "./axes";
import { Plot } from "./plot";
import { Label } from "./label";

export class Frame extends Scene {
  protected scene: Scene;
  protected renderer: WebGLRenderer;
  protected camera: PerspectiveCamera;
  protected axes: Axes;
  protected controls: OrbitControls;
  protected observer: ResizeObserver = new ResizeObserver(() => this.update());

  // TODO: at the moment only one size bc grid can only be squared
  // look into this for solution https://discourse.threejs.org/t/rectangular-gridhelper-possibility/37812
  constructor(protected canvas: HTMLCanvasElement, protected size = 10) {
    super();
    this.scene = new Scene();
    this.scene.background = new Color(0xffffff);

    const { clientWidth, clientHeight } = canvas;

    this.renderer = new WebGLRenderer({ canvas });
    this.renderer.setSize(clientWidth, clientHeight);

    this.setCamera(clientWidth, clientHeight);
    this.setControls();
    this.setAxes();

    this.updateOnChanges();
    this.update();
  }

  private setCamera(width: number, height: number) {
    this.camera = new PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(this.size * 1.5, this.size * 1.2, this.size * 2.5);
    this.scene.add(this.camera);
  }

  private setControls() {
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.target.set(0, 0, 0);
  }

  private setAxes() {
    this.axes = new Axes(this.size, this.size, this.size);

    this.scene.add(this.axes.x);
    this.scene.add(this.axes.y);
    this.scene.add(this.axes.z);

    this.scene.add(this.axes.gridXY);
    this.scene.add(this.axes.gridXZ);
    this.scene.add(this.axes.gridYZ);
  }

  updateOnChanges() {
    this.controls.addEventListener("change", () => this.update());
    this.observer.observe(this.canvas);
  }

  protected update() {
    this.renderer.render(this.scene, this.camera);
  }

  public capture() {
    const base64 = this.canvas.toDataURL("img/png");
  }

  public async addPlot(plot: Plot) {
    this.scene.add(...plot.getDrawables());
    plot.getWritables().forEach((l) => this.addLabel(l));

    this.update();
  }

  // private async addFallbackLabel(text: FallbackLabel) {
  //   this.scene.add(...text.getFrameable());
  //   this.update();
  // }

  public addLabel(text: Label) {
    this.scene.add(text);

    text.addEventListener("synccomplete", () => {
      this.update();
    });
  }
}
