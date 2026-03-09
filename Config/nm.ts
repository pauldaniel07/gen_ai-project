import express from "express";
import dotenv from "dotenv";
import connectDb from "./db.js";
import userRouter from "../routes/user.route.js";
import bookRouter from "../routes/book.route.js";
dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Our server is working at PORT :${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to the database:", err);
        process.exit(1);
    });

app.use("/api/authuser", userRouter);
app.use("/api/book", bookRouter);