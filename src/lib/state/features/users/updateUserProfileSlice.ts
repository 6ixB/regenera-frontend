import { UpdateUserProfileDto } from "@/lib/model/user/user.dto";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateUserProfileDtoState {
  original: UpdateUserProfileDto;
  current: UpdateUserProfileDto;
}

const initialState: UpdateUserProfileDtoState = {
  original: {},
  current: {},
};

const updateUserProfileDtoSlice = createSlice({
  name: "updateUserProfileDto",
  initialState,
  reducers: {
    setOriginalUpdateProfileDto: (
      state,
      action: PayloadAction<UpdateUserProfileDto>,
    ) => {
      state.original = action.payload;
    },
    setCurrentUpdateProfileDto: (
      state,
      action: PayloadAction<UpdateUserProfileDto>,
    ) => {
      state.current = action.payload;
    },
  },
});

export const { setOriginalUpdateProfileDto, setCurrentUpdateProfileDto } =
  updateUserProfileDtoSlice.actions;
export default updateUserProfileDtoSlice.reducer;
