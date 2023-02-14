import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ToastAndroid } from "react-native";
import { setItemAsync,deleteItemAsync } from "expo-secure-store";

const initialState = {
  userData: {},
  isLoggedIn: false,
  token: "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {

    signUp: (state, action) => {
      state.userData = action.payload;
      state.isLoggedIn =true;
    },
    login: (state, action) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    storeToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.userData = {};
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});
export const { logout, storeToken, login,signUp } = authSlice.actions;
export default authSlice.reducer;

export const loginUser = (body) => async (dispatch) => {
  try {
    const response = await axios({
      method: "POST",
      url: "https://blogapi-0jru.onrender.com/api/users/login",
      data: body,
    });
    console.log(response.data);
    dispatch(login(response.data.data));
    setItemAsync("userInformation", JSON.stringify(response.data.data));
    dispatch(storeToken(response.data.token));
    setItemAsync("userToken", JSON.stringify(response.data.token));
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = (body) => async (dispatch) => {
  try {
    const response = await axios({
      method: "POST",
      url: "https://blogapi-0jru.onrender.com/api/users",
      data: body,
    });
    console.log(response.data);
    dispatch(signUp(response.data));
    setItemAsync("registerData",JSON.stringify(response.data));
   
  } catch(erro){
    console.log(erro);
  }
};
export const LogoutUser = () => async (dispatch) =>{
  deleteItemAsync("userInformation");
  deleteItemAsync("userToken");
  dispatch (logout());
}
