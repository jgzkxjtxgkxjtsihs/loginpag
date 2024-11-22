// Add this function at the beginning of your script file
function createDigitalRain() {
    const container = document.querySelector('.digital-rain');
    const containerWidth = container.offsetWidth;
    const numberOfDrops = 50; // Adjust this number to change rain density

    // Clear existing drops
    container.innerHTML = '';

    // Create new drops
    for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement('span');
        
        // Random positioning and timing
        const left = Math.random() * containerWidth;
        const delay = Math.random() * 2;
        const duration = 1 + Math.random() * 2;
        
        drop.style.left = `${left}px`;
        drop.style.animationDelay = `${delay}s`;
        drop.style.animationDuration = `${duration}s`;
        
        container.appendChild(drop);
    }
}

// Initialize the rain effect
document.addEventListener('DOMContentLoaded', () => {
    createDigitalRain();
    
    // Recreate rain effect on window resize
    window.addEventListener('resize', createDigitalRain);
});

// Keep your existing login form event listener
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const button = document.querySelector('button');
    const loadingContainer = document.querySelector('.loading-container');
    const loadingProgress = document.querySelector('.loading-progress');
    const loadingPercentage = document.querySelector('.loading-percentage');
    const loadingText = document.querySelector('.loading-text');
    
    // Hide the button and show loading container
    button.style.display = 'none';
    loadingContainer.style.display = 'flex';
    
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        loadingProgress.style.width = `${progress}%`;
        loadingPercentage.textContent = `${Math.round(progress)}%`;
        
        // Update loading text based on progress
        if (progress < 30) {
            loadingText.textContent = 'INITIALIZING SECURITY PROTOCOLS';
        } else if (progress < 60) {
            loadingText.textContent = 'VERIFYING CREDENTIALS';
        } else if (progress < 90) {
            loadingText.textContent = 'ESTABLISHING SECURE CONNECTION';
        } else {
            loadingText.textContent = 'AUTHENTICATION COMPLETE';
        }
        
        if (progress === 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                // Hide loading container
                loadingContainer.style.display = 'none';
                
                // Show membership options directly
                const membershipOptions = document.querySelector('.membership-options');
                membershipOptions.style.display = 'flex';
            }, 500);
        }
    }, 100);
});

// Update the setupChatbot function to remove user input handling
function setupChatbot() {
    const chatbotMessages = document.getElementById('chatbotMessages');

    // Simulate user messages for demonstration
    const simulatedUserMessages = [
        "Hello",
        "What can you do?",
        "Tell me a joke",
        "Goodbye"
    ];

    let messageIndex = 0;

    function sendNextMessage() {
        if (messageIndex < simulatedUserMessages.length) {
            const userMessage = simulatedUserMessages[messageIndex];
            displayMessage(userMessage, 'user');

            // Simulate AI response
            setTimeout(() => {
                const aiResponse = getAIResponse(userMessage);
                displayMessage(aiResponse, 'ai');
                messageIndex++;
                setTimeout(sendNextMessage, 2000); // Wait before sending the next message
            }, 1000);
        }
    }

    // Start sending simulated messages
    sendNextMessage();
}

// Add event listeners for membership and solo options
document.getElementById('membershipOption').addEventListener('click', () => {
    alert("You have selected the Membership option!");
    showSciFiMonitor("You are now a member! Enjoy exclusive features.", true);
    
    // Show the VIP Gold Ticket after a short delay
    setTimeout(() => {
        const vipTicket = document.querySelector('.vip-ticket');
        vipTicket.style.display = 'flex'; // Show the VIP ticket
    }, 2000); // Adjust the delay as needed
});

document.getElementById('soloOption').addEventListener('click', () => {
    alert("You have selected the Solo option!");
    showSciFiMonitor("You are now in Solo mode! Enjoy your journey.");
});

// Function to show the sci-fi monitor with a message
function showSciFiMonitor(message, isVIP = false) {
    const sciFiMonitor = document.querySelector('.sci-fi-monitor');
    const monitorContent = document.getElementById('monitorContent');
    
    if (isVIP) {
        // Set VIP Gold Ticket message
        monitorContent.innerHTML = `
            <h3>VIP Gold Ticket</h3>
            <p>Congratulations! You are now a VIP member.</p>
            <p>Your exclusive benefits include:</p>
            <ul>
                <li>Priority Support</li>
                <li>Exclusive Access to Events</li>
                <li>Special Discounts</li>
            </ul>
        `;
    } else {
        // Set regular membership message
        monitorContent.textContent = message; // Set the message
    }
    
    sciFiMonitor.style.display = 'flex'; // Show the monitor
}
 