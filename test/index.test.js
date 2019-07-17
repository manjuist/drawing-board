import sum from '../src/index'
console.log(sum)
test('adds 1 + 2 to equal 3',()=>{
  const innerSum = sum(1);
  expect(innerSum(2)).toBe(3)
})
