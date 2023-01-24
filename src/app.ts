import "reflect-metadata";
import express from "express";
import "express-async-errors";
import handleError from "./errors/handlerError";
import profileRouter from "./routes/profile.routes";
import {
  alarmRouter,
  sessionRouter,
  taskRouter,
  userRouter,
  taskListRouter,
  financeRouter,
} from "./routes";

const app = express();
app.use(express.json());

app.use("/login", sessionRouter);
app.use("/users", userRouter);
app.use("/profile", profileRouter);
app.use("/alarms", alarmRouter);
app.use("/tasks", taskRouter);
app.use("/taskslists", taskListRouter);
app.use("/finance", financeRouter);

app.use(handleError);

export default app;
