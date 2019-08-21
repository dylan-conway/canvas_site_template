import App from './App';

window.onload = () => init();

const init = () => {
  document.body.style.margin = '0 0 0 0';
  document.body.style.overflow = 'hidden';

  const container = document.getElementById('root');
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  container.appendChild(canvas);

  const app = new App(canvas);

  app.render(ctx);
}
