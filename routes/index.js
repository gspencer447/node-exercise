import express from "express";
import userRouter from "./users.route.js";


const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/users"

export default router;
