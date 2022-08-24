export const incNumber=()=>{
    return {
        type:'INCREMENT'
    }
}

export const decNumber=()=>{
    return{
        type:'DECREMENT'
    }
}

export const viewUsers=()=>{
    return {
        type:'VIEW_USERS',
        payload:''
    }
}

export const login=()=>{
    return{
        type:'LOGIN'
    }
}
export const addUsers=()=>{
    return {
        type:'ADD_USERS',
        
    }
}

export const deleteUsers=()=>{
return{
    type:'DELETE_USERS'
}
}

export const viewNumbers=()=>{
    return {
        type:'VIEW_CALCULATION'
    }
}

export const addNumbers=()=>{
    return {
        type: 'ADD'
    }
}
export const subNumbers=()=>{
    return {
        type: 'SUBTRACT'
    }
}
export const mulNumbers=()=>{
    return {
        type: 'MULTIPLICATION'
    }
}
export const clearNumbers=()=>{
    return {
        type: 'CLEAR'
    }
}
export const equalNumbers=()=>{
    return {
        type: 'EQUAL'
    }
}