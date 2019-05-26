import Line from './line';
import Context from './interfaceCollection';

class Drawing {
  drawCanvas: HTMLCanvasElement;
  drawContext: Context;

  constructor(drawCanvas:HTMLCanvasElement){
    this.drawCanvas = <HTMLCanvasElement>drawCanvas;
    this.drawContext = <Context>drawCanvas.getContext('2d');
  }

  size = ({width, height}:{width: number, height:number}) => {
    const {drawCanvas} = this
    drawCanvas.width = width;
    drawCanvas.height = height;
  }

  init = () => {
    const {drawCanvas, drawContext} = this
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
      line = new Line(drawContext, [pageX, pageY]);
      drawCanvas.addEventListener('mousemove', bindMove, false);
      drawCanvas.addEventListener('mouseup', bindUp, false);
    };
    drawCanvas.addEventListener('mousedown', bindDown, false);
    window.addEventListener('resize', () => {
      drawCanvas.width = document.body.clientWidth;
      drawCanvas.height = document.body.clientHeight;
    }, false);
    window.addEventListener('mouseout', () => {
      drawCanvas.removeEventListener('mousemove', bindMove, false);
      drawCanvas.removeEventListener('mouseup', bindUp, false);
    }, false);
  }
}

export default Drawing
