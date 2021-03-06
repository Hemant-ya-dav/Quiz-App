import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionsDe: [],
  user: null,
  smallProfile: false,
  smallLogin: false,
  Allquizdetail: [],
  players: [],
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
    ADD_TO_PLAYERS: (state, action) => {
      return {
        ...state,
        players: [...state.players, action.payload],
      };
    },
    ALL_TO_QUIZ: (state, action) => {
      return {
        ...state,
        Allquizdetail: [...state.Allquizdetail, action.payload],
      };
    },
    REMOVE_FROM_QUESTION: (state, action) => {
      let newBasket = [...state.questionsDe];
      let index = action.payload;
      if (index >= 0) {
        newBasket.splice(index, 1); //Cut the same index to the newBasket by one
      }
      return {
        ...state,
        questionsDe: newBasket,
      };
    },
    SET_QUESTIONOUT: (state, action) => {
      return {
        ...state,
        questionsDe: [],
      };
    },
    SET_USER: (state, action) => {
      state.user = action.payload;
    },
    SET_USERLOGOUT: (state, action) => {
      state.user = null;
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
  REMOVE_FROM_QUESTION,
  ALL_TO_QUIZ,
  ADD_TO_PLAYERS,
} = detailSlice.actions;

export const selectDetails = (state) => state.detail.questionsDe;
export const selectUser = (state) => state.detail.user;
export const selectsmallprofile = (state) => state.detail.smallProfile;
export const selectsmalllogin = (state) => state.detail.smallLogin;
export const selectplayer = (state) => state.detail.players;

export default detailSlice.reducer;
