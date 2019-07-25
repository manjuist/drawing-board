import React from 'react'
import List from './List'
import './dock.scss'

const data = [
        {name:'画笔', icon:'pen'},
        {name:'图片', icon:'picture'},
        {name:'橡皮', icon:'eraser'},
        {name:'套索', icon:'lasso'},
        {name:'颜色', icon:'color'},
      ]

function Dock(){
  return ( <List className="dock" data={data} />)
}

export default Dock
