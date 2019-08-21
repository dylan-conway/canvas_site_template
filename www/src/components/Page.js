
export class Page {
  constructor() {
    name = 'sample_page';
  }

  render(ctx, width, height) {

    ctx.fillStyle = 'cornflowerblue';
    ctx.fillRect(64, 64, width - 128, height - 128);

    ctx.fillStyle = 'black';
    ctx.font = '24px Monospace';
    const text = 'Canvas site template';
    const textWidth = ctx.measureText(text).width;
    ctx.fillText('Canvas site template', width / 2 - textWidth / 2, 128);
  }
}
