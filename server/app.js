const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const UsersRouter = require("./Routers/UserRouter");
const Eventrouter=require("./Routers/EventsRouter")

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true, limit: "2mb" }));

app.use(cors());

app.use(morgan("dev"));

// Router

app.use("/api/users", UsersRouter);
app.use("/api/events",Eventrouter);

module.exports = app;
