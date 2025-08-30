import express from "express";
import cors from "cors";

const app = express();

// basic configs
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));

// cors config
app.use(cors({
    origin: [process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}))


export default app;