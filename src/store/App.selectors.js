export function selectAll(reducer) {
  return reducer.App;
}
export function selectAppState(state) {
  return (reducer) => reducer.App[state];
}
// export function selectAppState(state){
//     return (reducer)=>reducer.App[state];
// }
