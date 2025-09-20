import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/connectDB.js";

dotenv.config({
    path: "./.env",
});

const port = process.env.PORT || 4001;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
        process.exit(1);
    });
