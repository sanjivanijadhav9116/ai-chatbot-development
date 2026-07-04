const express = require("express");

const app = express();

app.use(express.json());
// Chat API Endpoint
app.post("/api/chat", (req, res) => {
    const prompt = req.body.prompt;

    res.json({
        response: "AI response generated"
    });
});
