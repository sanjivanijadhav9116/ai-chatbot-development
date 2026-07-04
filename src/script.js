const submitBtn = document.getElementById("submitBtn");
const userInput = document.getElementById("userInput");
const response = document.getElementById("response");
const loading = document.getElementById("loading");

submitBtn.addEventListener("click", () => {

    loading.style.display = "block";

    setTimeout(() => {

        loading.style.display = "none";

        response.innerHTML = "AI response generated";

    }, 1000);

});
