import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ToastAndroid } from "react-native";
import { setItemAsync,deleteItemAsync,getItemAsync } from "expo-secure-store";

const initialState = {
  userData: {},
  isLoggedIn: false,
  token: "",
  isLoading:false,
  error:"",
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    initiateLoading:(state) =>{
      state.isLoading = true;
    },
    setError:(state,action) =>{
      state.isLoading= false;
      state.error =action.payload;
    },

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
    edit: (state) => {
      state.userData = {};
      state.isLoggedIn = true;
    },
  },
});
export const { logout, storeToken, login,signUp,initiateLoading,setError,edit} = authSlice.actions;
export default authSlice.reducer;

export const loginUser = (body) => async (dispatch) => {
  try {
    dispatch(initiateLoading());
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
    console.log(error.response.data.message);
    dispatch(setError(error.response.data.message));
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
   
  } catch(error){
    console.log(error);
  
  }
};
export const LogoutUser = () => async (dispatch) =>{
  deleteItemAsync("userInformation");
  deleteItemAsync("userToken");
  dispatch (logout());
}


export const EditUser = (data) => async (dispatch) => {
  try {
    let token;
    let userId;
    getItemAsync("userToken").then((res) => {
     
      token = res;
      console.log (res)
      console.log(typeof token);
    });
    getItemAsync("userInformation").then((res) => {
      userId = JSON.parse(res).id;
    console.log(userId);
    });
    console.log(data);
    const response = await axios({
      method: "PATCH",
      url: `https://blogapi-0jru.onrender.com/api/users/${data.id}`,
      data: data,
      // headers: {
      //   accept: "application/json",
      //   Authorization: `bearer ${token} `,
      //   "Content-Type": "application/json",
      // },
    });

    console.log(response.data, "Edited user");
    dispatch(edit(response.data));
    setItemAsync("userInformation", JSON.stringify(response.data));
  } catch (error) {
    dispatch(setError());
    console.log(error,"edit user erro");
  }
};
