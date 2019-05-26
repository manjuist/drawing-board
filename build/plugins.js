const fs=require('fs')
class MyPlugin {
  constructor(options){
    this.options = options
  }

  apply(compiler){
    const cache = []
    const cache2 = []
    compiler.hooks.emit.tap('yoooo', (compilation) => {
      fs.writeFile('./x.txt',JSON.stringify(compilation,(key,value) => {
        if(typeof value === 'object'){
          if(cache.indexOf(value) !== -1){
            return
          }
        }
        cache.push(value)
        return value
      }),(err)=>{
        if(err) {
          throw err;
        }
      })
      fs.writeFile('./y.txt',JSON.stringify(compiler, (key,value) => {
        if(typeof value === 'object'){
          if(cache2.indexOf(value) !== -1){
            return
          }
        }
        cache2.push(value)
        return value
      }),(err)=>{
        if(err) {
          throw err;
        }
      })
    })
  }
}

module.exports = MyPlugin
