import * as actions from "./actionType";
import data from "./About/component/evData";
import axios from "axios";
import { userApi } from "../utils/api";

export const onAddUser = (user) => {
  return {
    type: actions.ADD_USER,
    payload: user,
  };
};

export const onDelete = (id) => {
  return {
    type: actions.DELETE_USER,
    payload: id,
  };
};

export const onGetEvData = () => {
  return {
    type: actions.GET_EV_DATA,
    payload: data,
  };
};

// action creator
export const onGet = () => {
  return (dispatch) => {
    axios
      .get(userApi)
      .then((res) => {
        //self-invoking function
        dispatch(
          ((data) => {
            return {
              type: actions.GET_DATA,
              payload: {
                httpResponse: data,
              },
            };
          })(res.data)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//self-invoking function
// ((a, b) => {

// })(4, 5)
