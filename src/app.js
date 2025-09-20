import express from "express";
import cors from "cors";
import errorHandler from "./middlewares/error.middleware.js";
import router from "./routes/test.routes.js";

const app = express();

const allowedOrigins = process.env.CORS_ORIGIN?.split(",") || [];

// basic configs
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// cors config
app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }
            return callback(new Error("Not allowed by CORS"));
        },
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
    }),
);

app.use("/", router);

app.use(errorHandler);

export default app;