const submitBtn = document.getElementById("submitBtn");
const userInput = document.getElementById("userInput");
const response = document.getElementById("response");
const loading = document.getElementById("loading");

submitBtn.addEventListener("click", async () => {
    const prompt = userInput.value;

    if (prompt.trim() === "") {
        response.innerHTML = "Please enter a message.";
        return;
    }

    loading.style.display = "block";
    response.innerHTML = "";

    try {
        const result = await fetch(
            "https://ai-chatbot-development-lwt9.onrender.com/api/chat",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt: prompt
                })
            }
        );

        const data = await result.json();

        if (!result.ok) {
            throw new Error(data.error || "Something went wrong");
        }

        response.innerHTML =
            data.response || "No response received.";

    } catch (error) {
        response.innerHTML =
            "Error connecting to the AI server.";

        console.error("Error:", error);

    } finally {
        loading.style.display = "none";
    }
});