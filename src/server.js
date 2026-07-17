require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));
// Gemini AI Client
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});
// Real AI Model
async function aiModel(userPrompt) {
    const response = await ai.models.generateContent({
        model: "gemini-flash-lite-latest",
        contents: userPrompt
    });

    return response.text;
}

// Chat API Endpoint
app.post("/api/chat", async (req, res) => {
    try {
        const prompt = req.body.prompt;

        if (!prompt) {
            return res.status(400).json({
                error: "Prompt is required"
            });
        }

        const aiResponse = await aiModel(prompt);

        res.json({
            response: aiResponse
        });

     } catch (error) {
    console.error("AI Error:", error);

    res.status(500).json({
        error: "AI model failed to generate a response"
    });
}
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

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});