const OpenAI = require("openai");
require("dotenv").config(); // Load .env variables
console.log("OpenAI API Key:", process.env.OPENAI_API_KEY);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY?.trim() });

exports.askAI = async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ message: "Message is required." });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [{ role: "user", content: message }],
        });

        if (!response.choices || response.choices.length === 0) {
            return res.status(500).json({ message: "AI response is empty." });
        }

        res.json({ response: response.choices[0].message.content });

    } catch (error) {
        console.error("AI API Error:", error.response?.data || error.message);
        res.status(500).json({
            message: "Error processing AI request",
            error: error.response?.data || error.message,
        });
    }
};

