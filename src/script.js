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

try {
    const result = await fetch("/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            prompt: prompt
        })
    });

    const data = await result.json();

    response.innerHTML = data.response || data.message || "No response received.";

} catch (error) {
    response.innerHTML = "Error connecting to the server.";
    console.error(error);
}

loading.style.display = "none";

});
