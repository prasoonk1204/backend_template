import { Router } from "express";
import { ApiResponse } from "../utils/apiResponse.js";
import { OK } from "../utils/http.js";

const router = Router();

router.get("/", (req, res) => {
    const response = new ApiResponse(OK, "API is running 🚀", {
        version: "v1",
        uptime: process.uptime(),
    });

    res.status(response.statusCode).json(response);
});

export default router;
