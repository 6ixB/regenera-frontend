import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { findOrganizerProjects } from "@/lib/api/projectApi";

interface CreatedTabState {
projects: ProjectEntity[];
  isFetched: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: CreatedTabState = {
  projects: [],
  isFetched: false,
  loading: false,
  error: null,
};

export const fetchOrganizerProjects = createAsyncThunk(
  "createdTab/fetchOrganizerProjects",
  async (organizerId: string) => {
    const response = await findOrganizerProjects(organizerId);
    return response.data; 
  }
);

const fetchCreatedTabSlice = createSlice({
  name: "fetchCreatedTab",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrganizerProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrganizerProjects.fulfilled, (state, action: PayloadAction<ProjectEntity[]>) => {
        state.projects = action.payload;
        state.isFetched = true;
        state.loading = false;
      })
      .addCase(fetchOrganizerProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch projects";
      });
  },
});

export default fetchCreatedTabSlice.reducer;
