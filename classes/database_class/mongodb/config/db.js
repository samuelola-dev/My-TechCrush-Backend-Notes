import mongoose from "mongoose";

const MONGO_URL = "mongodb://localhost:27017/techcrush"

const connectToDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
    } catch (error) {
        console.error(error.message);
    }
};

export default connectToDB;
