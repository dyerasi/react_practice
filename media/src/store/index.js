import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
  reducer: {
    //1. Thunk way for async api calls(old way)
    users: usersReducer,
    //2. RTK generated reducer for async api calls
    [albumsApi.reducerPath]: albumsApi.reducer, //[albumsApi.reducerPath] === albums (as key)
    [photosApi.reducerPath]: photosApi.reducer,
  },
  //append custom middleware to default
  //FROM DEV DOCS:
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

//TEMPORARY: DEV ONLY!!!
//window.store = store; //console: store.getState() to see state in browser

setupListeners(store.dispatch);

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "./apis/albumsApi";

export {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} from "./apis/photosApi";
