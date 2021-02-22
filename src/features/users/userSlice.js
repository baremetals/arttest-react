import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authenticated: false,
  credentials: {},
  notifications: [],
  followers: [],
  following: [],
  likes: [],
  votesReceived: [],
  votesGiven: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthenticated(state, action) {
      return {
        ...state,
        authenticated: true
      }
    },
    setUnAuthenticated(state, action) {
      return initialState;
    },
    setUser(state, action) {
      return {
        authenticated: true,
        loading: false,
        ...action.payload
      };
    },
    loadingUser(state, action) {
      return {
        ...state,
        loading: true
      };
    },
    likeUpload(state, action) {
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            username: state.credentials.username,
            uploadId: action.payload.uploadId
          }
        ]
      };
    },
    unLikeUpload(state, action) {
      return {
        ...state,
        likes: state.likes.filter(
          (like) => like.uploadId !== action.payload.uploadId
        )
      }
    },
    followUser(state, action) {
      return {
        ...state,
        following: [
          ...state.following,
          {
            username: state.credentials.username,
            userId: action.payload.userId
          }
        ]
      };
    },
    unfollowUser(state, action) {
      return {
        ...state,
        following: state.following.filter(
          (follow) => follow.userId !== action.payload.userId
        )
      }
    },
    notificationsRead(state, action) {
      state.notifications.forEach((not) => (not.read = true));
      return {
        ...state
      };
    },
    signUpUser(newUserData) {},
    signInUser(userData) {},
    resetPassword(myEmail) {},
    updateEmailAddress(myEmail) {},
    updatePassword(authCred) {},
    signOutUser() {},
    getUserData() {},
    uploadImage() {},
    editUserDetails() {},
    markNotificationsRead() {},
    setAuthorizationHeader(){},

  },
});


export const {
  notificationsRead,
  unfollowUser,
  followUser,
  likeUpload,
  unLikeUpload,
  loadingUser,
  setUser,
  setUnAuthenticated,
  setAuthenticated,
  signUpUser,
  signInUser,
  signOutUser,
  getUserData,
  uploadImage,
  editUserDetails,
  markNotificationsRead,
  setAuthorizationHeader,
  resetPassword,
  updateEmailAddress,
  updatePassword,
} = userSlice.actions;

export default userSlice.reducer;