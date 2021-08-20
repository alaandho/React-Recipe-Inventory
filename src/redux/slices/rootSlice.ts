import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Pho',
        description: 'bone broth noodle soup',
        cook_time: '9hrs',
        meat_or_veg: 'beef or chicken',
        garnishes: 'scallions, cilantro, lime, thai basil, bean sprouts',
        spices: 'star anise, cinnamon stick, coriander, fennel, dates',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName } = rootSlice.actions;