import express from "express";
import taskRoutes from "./routes/taskRoutes";
import { requestLogger } from "./middleware/requestLogger";

const app = express();

app.use(requestLogger);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy"
  });
});

app.use("/tasks", taskRoutes);

export default app;