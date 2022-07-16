import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionsDe: [],
  user: [],
  smallProfile: false,
  smallLogin: false,
};

export const detailSlice = createSlice({
  name: "detail",
  initialState,

  reducers: {
    ADD_TO_QUESTION: (state, action) => {
      return {
        ...state,
        questionsDe: [...state.questionsDe, action.payload],
      };
    },
    REMOVE_FROM_QUESTION: (state, action) => {
      let newBasket = [...state.questionsDe];
      let index=action.payload;
      if (index >= 0) {
        newBasket.splice(index, 1); //Cut the same index to the newBasket by one
      }
      return {
        ...state,
        questionsDe: newBasket,
      };
    },
    SET_USER: (state, action) => {
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    },
    SET_USERLOGOUT: (state, action) => {
      return {
        ...state,
        user: [],
      };
    },
    SMALL_PROFILE: (state, action) => {
      state.smallProfile = action.payload;
    },
    SMALL_LOGIN: (state, action) => {
      state.smallLogin = action.payload;
    },
  },
});

export const {
  SET_USER,
  SMALL_PROFILE,
  SMALL_LOGIN,
  SET_USERLOGOUT,
  ADD_TO_QUESTION,
  REMOVE_FROM_QUESTION
} = detailSlice.actions;

export const selectDetails = (state) => state.detail.questionsDe;
export const selectUser = (state) => state.detail.user;
export const selectsmallprofile = (state) => state.detail.smallProfile;
export const selectsmalllogin = (state) => state.detail.smallLogin;

export default detailSlice.reducer;
