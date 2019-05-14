interface Context {
    fillStyle:string;
    strokeStyle:string;
    shadowBlur:number;
    shadowColor:string;
    arc:Function;
    fill:Function;
    beginPath:Function;
    closePath:Function;
    rotate:Function;
    translate:Function;
    fillRect:Function;
    clearRect:Function;
    lineTo:Function;
    moveTo:Function;
    stroke:Function;
}

class Line {
  ctx: Context;

  points:Array<Array<number>>;

  constructor(ctx:Context, point:Array<number>) {
    this.ctx = ctx;
    this.points = [point];
  }

  addPoint = (point:Array<number>) => {
    this.points.push(point);
  }

  draw = () => {
    const { ctx, points } = this;
    const [startPoint, ...restPoints] = points;
    ctx.strokeStyle = '#000';
    ctx.beginPath();
    ctx.moveTo(...startPoint);
    restPoints.forEach((_point) => { ctx.lineTo(..._point); });
    ctx.stroke();
  }
}

const drawCanvas = <HTMLCanvasElement>document.getElementById('draw');
const drawCtx = <Context>drawCanvas.getContext('2d');

drawCanvas.width = document.body.clientWidth;
drawCanvas.height = document.body.clientHeight;

let line:Line;
const bindMove = function move(e:any) {
  const { pageX, pageY } = e;
  line.addPoint([pageX, pageY]);
  line.draw();
};
const bindUp = function up(e:any) {
  const { pageX, pageY } = e;
  console.log(pageX, pageY);
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
