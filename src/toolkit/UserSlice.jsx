import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
    userDetails:JSON.parse(localStorage.getItem('token'))
}
const userSlice = createSlice({

})