import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        userName: {type: String, required: true, trim: true, maxlength: 100},
        email: {
            type: String, 
            required: true, 
            trim: true, 
            unique: true, 
            lowercase: true
        },
        password: {type: String, required: true, unique: true, select: false, minLength: 8},
        // role: {type: mongoose.Schema.Types.ObjectId, ref: "Role"},
        role: {type: Number},
        isActive: {type: Boolean, default: true}, 
        isVerified: {type: Boolean, default: true},
        verifyToken: {type: String, default: null},
        resetToken: {type: String, default: null},
        lastLogin: {type: Date}, 
    },  {timeStamp: true} 
);

userSchema.pre("save", async function(next){

    // if password doesn't exixts
    if (!this.isModified('password')) return;

    // if password exist
    this.password = await bcrypt.hash(this.password, 12);
    // next();
});

// Other model methods

// To remove sensitive items drom the database
userSchema.methods.comparePassword = function(plain){
    return bcrypt.compare(plain, this.password);
}

userSchema.methods.toJSON = function(){
    const obj = this.toObject();
    delete obj.password;
    delete obj.verifyToken;
    delete obj.resetToken;

    return obj;
}

// userSchema.index({email: 1});

export const User = mongoose.model('User', userSchema);






