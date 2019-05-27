import React from 'react'
import {render} from 'react-dom'
import CanvasBoard from './components/canvas-board'
import Drawing from './components/drawing'

class CanvasWrapper extends React.Component{
  canvasElement:HTMLCanvasElement | null;
  drawingInstance: Drawing | null;

  constructor(props:any){
    super(props)
    this.canvasElement = null;
    this.drawingInstance = null;
  }

  getCanvasElement = (canvasElement:HTMLCanvasElement) => {
    this.canvasElement = canvasElement
  }

  componentDidMount(){
    const { canvasElement } = this
    if(canvasElement){
      this.drawingInstance = new Drawing(canvasElement)
      this.drawingInstance.size({
        width:document.body.clientWidth,
        height:document.body.clientHeight}
      )
      this.drawingInstance.init()
    }
  }

  //componentDidUpdate(){ }

  render(){
    const {getCanvasElement} = this
    return (<CanvasBoard
      getCanvasElement={getCanvasElement}
      />)
  }
}

render(
  <CanvasWrapper />,
  document.getElementById('root')
)