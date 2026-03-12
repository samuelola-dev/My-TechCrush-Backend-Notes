import { configuration } from "./env.js";

export const corsOptions = {
    origin(origin, callback){
        if (!origin || configuration.ALLOWED_ORIGIN.includes(origin)){
            callback(null, true);
        }
        callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-type", "Authorization"]
};

