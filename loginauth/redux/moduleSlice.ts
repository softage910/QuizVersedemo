import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModuleState {
  selectedModule: string | null;
}

const initialState: ModuleState = {
  selectedModule: null,
};

const moduleSlice = createSlice({
  name: "module",
  initialState,
  reducers: {
    setSelectedModule: (state, action: PayloadAction<string | null>) => {
      state.selectedModule = action.payload;
    },
  },
});

export const { setSelectedModule } = moduleSlice.actions;
export default moduleSlice.reducer;
