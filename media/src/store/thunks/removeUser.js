import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (user) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);

  // FIX ERROR HERE:
  //response is empty object on delete
  //so no idea which user to delete
  // return response.data;

  return user;
});

export { removeUser };
