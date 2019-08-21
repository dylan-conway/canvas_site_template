import { Page } from './components';

class App {
  constructor(canvas) {
    this.width = canvas.width;
    this.height = canvas.height;

    this.page = new Page();

    window.addEventListener('resize', () => this.resize(canvas));
  }

  resize(canvas) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    this.width = innerWidth;
    this.height = innerHeight;
  }

  render(ctx) {
    const { width, height } = this;
    ctx.clearRect(0, 0, width, height);

    this.page.render(ctx, width, height);

    requestAnimationFrame(() => this.render(ctx));
  }
}

export default App;