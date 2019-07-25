import React from 'react'

interface Props {
  data:{name:string, icon:string}[];
  className: string;
}

function List({data, className}:Props){
  return (
    <div className={className}>
      {
        data.map(
          (cur:{name:string, icon:string})=>(
            <button 
              key={cur.name} 
              type="button"
              onClick={(...e)=>{console.log(e,cur.name)}}
            >
              <i className={`iconfont icon-${cur.icon}`}></i>
            </button>
          )
        )
      }
    </div>
  )
}

export default List
