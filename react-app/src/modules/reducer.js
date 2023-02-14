import * as actions from "./actionType";

const initState = {
  employee: [],
  evData: [],
  users: [],
};

export const reducer = (state = initState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case actions.ADD_USER:
      return { ...state, employee: [...state.employee, action.payload] };

    case actions.DELETE_USER:
      return {
        ...state,
        employee: state.employee.filter((val) => val.id !== action.payload),
      };
    case actions.GET_EV_DATA:
      return { ...state, evData: action.payload };

    case actions.GET_DATA:
      return { ...state, users: action.payload.httpResponse };
      
    default:
      return state;
  }
};

// const color = ['pink', 'red', 'blue', 'pink'];

// color.filter((ele) => {
//   return ele === 'pink'
// })
