
export default class Mixer {
  constructor() {
    this.page = undefined;
    this.particles = [];
    this.buttons = [];
  }

  mousemove(event) {
    const { x, y } = event;
    console.log(x, y);
  }

  setPage(page) {
    this.page = page;
  }

  addParticle(particle) {
    this.particles.push(particle);
  }

  addButton(button) {
    this.buttons.push(button);
  }

  renderPage(ctx, width, height) {
    this.page.render(ctx, width, height);
  }

  renderParticles(ctx) {
    this.particles = this.particles.filter(particle => particle.alive);
    this.particle.forEach(particle => particle.render(ctx));
  }

  renderButton(ctx) {
    this.buttons = this.buttons.filter(button => button.alive);
    this.buttons.forEach(button => button.render(ctx));
  }
}