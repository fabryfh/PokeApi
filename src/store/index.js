import { configureStore } from "@reduxjs/toolkit";
import trainer from './slices/TrainerName.slice'


export default configureStore({
    reducer:{
        trainer
    }
})

