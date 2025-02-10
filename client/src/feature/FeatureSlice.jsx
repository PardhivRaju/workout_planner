import { createSlice } from "@reduxjs/toolkit";

const initialWorkoutId = localStorage.getItem("workoutId");

const FeatureSlice = createSlice({
  name: "feature",
  initialState: { workoutId: initialWorkoutId || null, loading: false },
  reducers: {
    setWorkoutId: (state, action) => {
      state.workoutId = action.payload; 
      localStorage.setItem("workoutId", action.payload);
    },
    resetWorkoutId: (state) => {
      state.workoutId = null;
      localStorage.removeItem("workoutId");
    },
    setLoading: (state) => {
      state.loading = true;
    },
    resetLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { setWorkoutId, resetWorkoutId, setLoading, resetLoading } = FeatureSlice.actions;
export default FeatureSlice.reducer;
