import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true, 
        trim: true
    },
    description: {type: String}

});

export const Role = mongoose.model('Role', roleSchema);