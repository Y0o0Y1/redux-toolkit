import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        fetchProfile: (state, action) => {
            console.log(state, action)
            return { ...action.payload }
        },
        updateFirstName: (state, action) => {
            state.first_name = action.payload
        },
        updateLastName: (state, action) => {
            state.last_name = action.payload
        },
        addHobby: (state, action) => {
            state.hobbies.push(action.payload)
        },
        updateHobbies: (state, action) => {
            state.hobbies = action.payload
        },
        addSkill: (state, action) => {
            state.skills.push(action.payload)
        },
        updateSkills: (state, action) => {
            let t0 = performance.now()
            // state.skills = action.payload
            let test = { ...state, skills: action.payload }
            let t1 = performance.now()
            console.log(`updating skills took => ${t1 - t0}`)
            return test
        },
        updateIdentity: (state, action) => {
            let t0 = performance.now()
            // state.identity = { ...state.identity, ...action.payload }
            const test = { ...state, identity: { ...state.identity, ...action.payload } }
            let t1 = performance.now()
            console.log(`updating or merging identity took => ${t1 - t0}`)
            return test

        }
    }
})

export const { fetchProfile, updateFirstName, updateLastName, addHobby, updateHobbies, addSkill, updateSkills, updateIdentity } = userSlice.actions

export default userSlice.reducer