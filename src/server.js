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
// History API
app.get("/api/history", (req, res) => {
    res.json({
        history: []
    });
});

// Users API
app.get("/api/users", (req, res) => {
    res.json({
        users: []
    });
});

// Feedback API
app.post("/api/feedback", (req, res) => {
    res.json({
        message: "Feedback stored successfully"
    });
});

// Health Check API
app.get("/api/health", (req, res) => {
    res.json({
        status: "Server is running"
    });
});
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
