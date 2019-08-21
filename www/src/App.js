

class App {
  constructor(canvas) {
    this.width = canvas.width;
    this.height = canvas.height;

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

    ctx.fillStyle = 'cornflowerblue';
    ctx.fillRect(64, 64, width - 128, height - 128);

    ctx.fillStyle = 'black';
    ctx.font = '32px Monospace';
    ctx.fillText('Canvas site template', 64, 64);

    requestAnimationFrame(() => this.render(ctx));
  }
}