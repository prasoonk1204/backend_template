import { ApiError } from "../utils/apiError.js";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../utils/http.js";
import { ApiResponse } from "../utils/apiResponse.js";

/**
 * Global error handler middleware
 *
 * @param {Error | ApiError} err
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const errorHandler = (err, req, res, next) => {
    let error = err;

    // Ensure error is always an ApiError for consistency
    if (!(error instanceof ApiError)) {
        let statusCode = INTERNAL_SERVER_ERROR;
        let message = error.message || "Something went wrong";

        if (error.statusCode) {
            statusCode = error.statusCode;
        } else if (error.name === "ValidationError") {
            statusCode = BAD_REQUEST;
            message = "Validation error";
        }

        error = new ApiError(
            statusCode,
            message,
            error?.errors || [],
            err.stack,
        );
    }

    // Wrap in ApiResponse format
    const response = new ApiResponse(
        error.statusCode,
        error.message,
        { errors: error.errors },
    );

    if (process.env.NODE_ENV === "development") {
        response.stack = error.stack;
    }

    console.error("❌", error.message);

    return res.status(error.statusCode).json(response);
};

export default errorHandler;
