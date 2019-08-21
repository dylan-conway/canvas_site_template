

export default class Component {
  constructor(name, mixer) {
    this.name = name;
    this.mixer = mixer;
    this.alive = true;
    this.x = undefined;
    this.y = undefined;
  }

  setPos(coords) {
    const { x, y } = coords;
    this.x = x;
    this.y = y;
  }

  move(vec) {
    const { vx, vy } = vec;
    this.x += vx;
    this.y += vy;
  }

  render(ctx) {
    console.errer(`${this.name}: render method not implemented`);
  }
}