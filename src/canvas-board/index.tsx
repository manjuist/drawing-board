import React from 'react';
import './canvas-board.scss';

interface Props {
  getCanvasElement:Function;
}

class CanvasBoard extends React.Component<Props, {}> {
  canvasElement = React.createRef<HTMLCanvasElement>()

  componentDidMount() {
    const {
      canvasElement,
      props: { getCanvasElement },
    } = this;
    getCanvasElement(canvasElement.current);
  }

  render() {
    return (
      <canvas
        id="draw"
        ref={this.canvasElement}
      />
    );
  }
}

export default CanvasBoard;
