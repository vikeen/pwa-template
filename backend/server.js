import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.set("port", port);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get("/api/healthcheck", (req, res) => {
    res.sendStatus(200)
});

app.listen(port, () => {
    console.log(`API is running - http://localhost:${port}/`);
});