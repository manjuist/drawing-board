import Line from './line';
import Context from './interfaceCollection';

const drawCanvas = <HTMLCanvasElement>document.getElementById('draw');
const drawCtx: Context = <Context>drawCanvas.getContext('2d');

drawCanvas.width = document.body.clientWidth;
drawCanvas.height = document.body.clientHeight;

let line:Line;
const bindMove = function move(e:any) {
  const { pageX, pageY } = e;
  line.addPoint([pageX, pageY]);
  line.draw();
};
const bindUp = function up() {
  drawCanvas.removeEventListener('mousemove', bindMove, false);
  drawCanvas.removeEventListener('mouseup', bindUp, false);
};
const bindDown = function down(e:any) {
  const { pageX, pageY } = e;
  line = new Line(drawCtx, [pageX, pageY]);
  drawCanvas.addEventListener('mousemove', bindMove, false);
  drawCanvas.addEventListener('mouseup', bindUp, false);
};
drawCanvas.addEventListener('mousedown', bindDown, false);
window.addEventListener('resize', () => {
  drawCanvas.width = document.body.clientWidth;
  drawCanvas.height = document.body.clientHeight;
}, false);
