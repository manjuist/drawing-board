import Context from './interfaceCollection';

class Picture {
  ctx: Context;

  points:Array<Array<number>>;

  constructor(ctx:Context, point:Array<number>) {
    this.ctx = ctx;
    this.points = [point];
  }

  draw = (img:HTMLImageElement) => {
    const { ctx } = this;
    ctx.drawImage(img)
  }
}

export default Picture;
