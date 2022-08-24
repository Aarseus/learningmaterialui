const defaultState = {
   userlist:[
], userfinder:[

]
    
  };
 



const userManipulation= (state=defaultState,action) => {


  switch (action.type) {
    case "ADD_USERS":
      return {
        ...state,userlist:[...state.userlist,
        {username:action.payload.username,
        email:action.payload.email,
        password:action.payload.password}
        ]
        
      };
      // data.filter((b) => b.user.email !== newdelete.user.email

    case "REMOVE_USERS":
console.log(state.userlist.filter((b)=>b.email!==action.payload.email))
      return {...state,userlist:state.userlist.filter((b)=>b.email!==action.payload.email)}
      
    case 'LOGIN':
        return {
          userlist:state.userlist.email===action.payload.email?
          state.userfinder=[]:
        state.userfinder=state.userlist.find((b)=>b.email===action.payload.email)
       
           
          }
        
      // return {
      //   state.filter()
      //   ...state,userlist:[...state.userlist.filter((b)=>b.userlist.email!==action.payload.email]
      // };

    // case "VIEW_USERS":
    //   return state;
    default:
        return state;
  }

}

export default userManipulation

