function sum(a){
  return function sunInner(b){
    return a + b;
  }
}

export default sum
