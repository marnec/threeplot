import { Color, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Axes } from "./axes";
import { Plot } from "./plot";
import { Label } from "./label";
import { AxesParams } from "./axes.params";

export class Frame extends Scene {
  protected scene: Scene;
  protected renderer: WebGLRenderer;
  protected camera: PerspectiveCamera;
  protected axes: Axes;
  protected controls: OrbitControls;
  protected observer: ResizeObserver = new ResizeObserver(() => this.onCanvasResize());
  protected width: number;
  protected height: number;

  // TODO: at the moment only one size bc grid can only be squared
  // look into this for solution https://discourse.threejs.org/t/rectangular-gridhelper-possibility/37812
  constructor(protected canvas: HTMLCanvasElement, protected size = 10, axesParams?: AxesParams) {
    super();
    this.scene = new Scene();
    this.scene.background = new Color(0xffffff);

    const { clientWidth, clientHeight } = canvas;
    this.width = clientWidth;
    this.height = clientHeight;

    this.renderer = new WebGLRenderer({ canvas });
    this.renderer.setSize(clientWidth, clientHeight);

    this.setCamera(clientWidth, clientHeight);
    this.setControls();
    this.setAxes(axesParams);

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

  private setAxes(params?: AxesParams) {
    this.axes = new Axes(this.size, this.size, this.size, params);

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

  public capture(): string {
    this.renderer.render(this.scene, this.camera);
    const base64 = this.canvas.toDataURL("img/png");
    const a = document.createElement("a");
    a.href = base64;
    a.download = "threeplot.png";
    a.click();
    return base64;
  }

  public async addPlot(plot: Plot) {
    this.scene.add(...plot.getDrawables());
    plot.getWritables().forEach((l) => this.addLabel(l));

    this.update();
  }

  public addLabel(text: Label) {
    this.scene.add(text);

    text.addEventListener("synccomplete", () => {
      this.update();
    });
  }

  private onCanvasResize() {
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
    this.update();
  }
}
