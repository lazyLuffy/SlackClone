import { createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';



// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const appSlice = createSlice({
  name: 'app',
  initialState : {
  roomId: null,
  userAuth:null
},
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    signIn:(state,action)=>{
      state.userAuth = action.payload.userAuth;
    },
    signOut : (state,action)=>{
      state.userAuth = null
    },
    enterRoom: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.roomId = action.payload.roomId;
    },
   
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },})
 

export const { enterRoom,signIn } = appSlice.actions;

// export const selectedRoomId =(state) => state.app.roomId



export default appSlice.reducer;
