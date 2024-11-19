function showProgramDetails() {
    const programSelect = document.getElementById("programSelect");
    const selectedProgram = programSelect.value;

    // Redirect based on the selected program
    if (selectedProgram) {
        switch (selectedProgram) {
            case "elementary":
                window.location.href = "elementary.html"; // Redirect to the elementary program page
                break;

            case "highschool":
                window.location.href = "highschool.html"; // Redirect to the high school program page
                break;

            case "seniorHighschool":
                window.location.href = "seniorHighschool.html"; // Redirect to the senior high school program page
                break;

            case "college":
                window.location.href = "college.html"; // Redirect to the college program page
                break;

            default:
                alert("Please select a valid program.");
                break;
        }
    }
    function showProgramDetails(program) {
        const detailsContent = document.getElementById('detailsContent');
        const programDetailsSection = document.getElementById('programDetails');
        
        // Example content based on selected program
        switch (program) {
            case 'elementary':
                detailsContent.innerHTML = '<p>Details about the Elementary program.</p>';
                break;
            case 'highschool':
                detailsContent.innerHTML = '<p>Details about the High School program.</p>';
                break;
            case 'seniorHighschool':
                detailsContent.innerHTML = '<p>Details about the Senior High School program.</p>';
                break;
            case 'college':
                detailsContent.innerHTML = '<p>Details about the College program.</p>';
                break;
            default:
                detailsContent.innerHTML = '<p>Please select a program.</p>';
        }
    
        programDetailsSection.classList.remove('hidden'); // Show the program details section
    }

function sendMessage() {
    const userInput = document.getElementById("userInput");
    const messages = document.getElementById("messages");

    // Get the user's input
    const userMessage = userInput.value;
    if (userMessage.trim() === "") return; // Prevent sending empty messages

    // Display the user's message
    messages.innerHTML += `<div class="message user">You: ${userMessage}</div>`;
    
    // Clear the input
    userInput.value = "";

    // Simulate AI response (you can replace this with actual AI logic later)
    setTimeout(() => {
        const aiResponse = getAIResponse(userMessage);
        messages.innerHTML += `<div class="message ai">AI: ${aiResponse}</div>`;
        messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
    }, 500);
}

// Simple AI response simulation
function getAIResponse(input) {
    const responses = {
        "tangina mo baks" : "tangina mo din baks",
        "hello": "Hello! How can I assist you today?",
        "what programs do you offer?": "We offer Elementary, High School, Senior High School, and College programs.",
        "how can I contact you?": "You can contact us via email at studentaffairs@example.com.",
        "help": "Sure! What do you need help with?",
        "thank you": "You're Welcome, feel free to message me anytime if you have more inquiries!",
    };

    // Return a response based on the input or a default message
    return responses[input.toLowerCase()] || "I'm sorry, I didn't understand that.";
}