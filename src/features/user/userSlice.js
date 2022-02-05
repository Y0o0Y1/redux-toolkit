import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        fetchProfile: (state, action) => {
            console.log(state, action)
            return state = { ...action.payload }
        },
        updateFirstName: (state, action) => {
            return state = { ...state, "first_name": action.payload }
        },
        updateLastName: (state, action) => {
            return state = { ...state, "last_name": action.payload }

        },
        addHobby: (state, action) => {
            // return state = { ...state, "last_name": action.payload }
            return { ...state, hobbies: [...state.hobbies, action.payload] }
        },
        updateHobbies: (state, action) => {
            return { ...state, hobbies: action.payload }
        },
        addSkill: (state, action) => {
            return { ...state, skills: [...state.skills, action.payload] }

        },
        updateSkills: (state, action) => {
            return { ...state, skills: action.payload }
        },
        updateIdentity: (state, action) => {
            return { ...state, identity: { ...state.identity, ...action.payload } }
        }
    }
})

export const { fetchProfile, updateFirstName, updateLastName, addHobby, updateHobbies, addSkill, updateSkills, updateIdentity } = userSlice.actions

export default userSlice.reducer