import mongoose from "mongoose";

const {MONGODB_URI} = process.env;

export const connectDB = async () => {

    try {
        const {connection } = await mongoose.connect(MONGODB_URI as string);
    }
};