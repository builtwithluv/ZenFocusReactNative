export function incrementNumber(num) {
  return {
    type: 'increment',
    payload: ++num
  }
}
