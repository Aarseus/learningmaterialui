// const[data,setData]=useState([])
const initialState=[]
const manageUser = (state =initialState, action) => {
    switch (action.type) {
      case "ADDUSER":
        return (
            'sss'

        );
  
      case "DELUSER":
        return state - 1;
  
        case 'LISTUSER':
            return state

      default:
        return state;
    }
  };
  export default manageUser