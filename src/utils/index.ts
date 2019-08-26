const getCanvasPoint = function getCanvasPoint(canvas:HTMLCanvasElement, point:number[]) {
  const canvasBoundingClientRect = <DOMRect>canvas.getBoundingClientRect();
  const [x, y] = point;
  const { x: canvasX, y: canvasY } = canvasBoundingClientRect;
  return [x - canvasX, y - canvasY];
};

export default getCanvasPoint;
