import express from "express";
import userRouter from "./routers/userRouter.js";

const app = express();

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
