import { Component } from './components';
import { Page } from './components';

class App extends Component {
  constructor(canvas, mixer) {
    super('app', mixer);
    this.width = canvas.width;
    this.height = canvas.height;

    this.mixer.setPage(new Page(mixer));

    window.addEventListener('resize', () => this.resize(canvas));
    window.addEventListener('mousemove', event => this.mousemove(event));
  }

  resize(canvas) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    this.width = innerWidth;
    this.height = innerHeight;
  }

  mousemove(event) {
    this.mixer.mousemove(event);
  }

  render(ctx) {
    const { width, height } = this;
    ctx.clearRect(0, 0, width, height);

    this.mixer.renderPage(ctx, width, height);

    requestAnimationFrame(() => this.render(ctx));
  }
}

export default App;