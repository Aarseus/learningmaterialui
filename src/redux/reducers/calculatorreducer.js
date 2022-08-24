const initialState={
    totalValue:0,
    number:0
}
const calculation=(state=initialState.totalValue,action)=>{

    switch(action.type){
case 'VIEW':
    return state
case 'ADD':
    return state+parseInt(action.payload.number)
case 'SUBTRACT':
    return state-parseInt(action.payload.number)
case 'MULTIPLICATION':
    return state*parseInt(action.payload.number)
case 'CLEAR':
    return state=0
   
default:
    return state

    }
}
export default calculation
    