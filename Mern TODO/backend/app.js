const express = require("express");
const app = express();
const cors = require("cors");
require("./database/db");
const auth = require("./router/auth");
const list = require("./router/list");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello");
})

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(1000, () => {
    console.log("server started");
})